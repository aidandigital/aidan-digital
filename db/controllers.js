import clientPromise from "./clientPromise";
import doubleJson from "../utils/doubleJson";

// ENV VARS
const dbName = process.env.DB_NAME;

if (!dbName) {
  throw new Error("Please add your DB name to .env.local");
}

const database = (async function () {
  // await cannot be used outside of an async.
  // so we must call it inside this async function that we immediately run instead of simply declaring it on the top level/module.
  const client = await clientPromise;
  const selectedDb = client.db(dbName);
  return selectedDb; // make sure we return something that indicates the promise has resolved
}());

export async function getTechnologies() {
  const db = await database; // wait till the database is ready from the function above
  const technologies = await db
    .collection("technologies")
    .find({unlisted: {$ne: true}})
    .toArray();
  return doubleJson(technologies);
}

export async function getProject(path) {
  const db = await database;
  const project = await db.collection("projects").aggregate([
    { $match: { path: path } },
    { $limit: 1 },
    {
      $addFields: { // Add a field containing the original order of technologies
        technologyIndexes: '$technologies'
      }
    },
    {
        $lookup: { // Doing $lookup does not maintain the original array order.
            from: "technologies",
            localField: "technologies",
            foreignField: "path",
            as: "unsortedTechnologies",
        }
    },
    {
      $project: { complexity: false } // remove complexity field from output
    }
  ]).toArray();

  let parsedProject = doubleJson(project[0]);

  parsedProject.technologies = parsedProject.technologyIndexes.map(path => {
    return parsedProject.unsortedTechnologies.find(tech => tech.path === path);
  });

  return parsedProject;
}

export async function getProjects(limit = false) {
  const db = await database;
  const projects = await db.collection("projects").aggregate([
    { $sort: { complexity: -1 } },
    { $limit: limit ? limit : 100 }, // if there's no limit, there will be a hard limit of 100
    {
      $addFields: {
        technologyIndexes: '$technologies'
      }
    },
    {
        $lookup: {
            from: "technologies",
            localField: "technologies",
            foreignField: "path",
            as: "unsortedTechnologies",
        }
    },
    {
      $project: { complexity: false } // remove complexity field from output
    },
  ]).toArray();

  let parsedProjects = doubleJson(projects);

  parsedProjects.forEach((project, i) => {
    parsedProjects[i].technologies = project.technologyIndexes.map(path => {
      return project.unsortedTechnologies.find(tech => tech.path === path);
    })
  });

  return parsedProjects;
}

export async function getPage(name) {
  const db = await database;
  const page = await db.collection("pages").findOne({ name: name });
  return doubleJson(page);
}