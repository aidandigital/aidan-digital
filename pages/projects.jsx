import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Section from '../components/high-level/Section'
import Title from '../components/low-level/Title'
import Feed from '../components/low-level/Feed'
import Dropdown from '../components/low-level/Dropdown'
import Link from 'next/link'
import { getTechnologies, getProjects } from '../db/controllers.js'

function Projects({ technologies, projects }) {
  // Map technologies array into a form that can be accepted by Menu:
  function getMenuItems() {
    return technologies.map(technology => ({
      name: technology.alt,
      href: `/projects?tech=${technology.path}`,
    }));
  }

  function checkProjectIsApplicable(project, techPath) {
    if (!techPath) { // If no technology is selected, the project is applicable
      return true;
    } else { // Otherwise check if the project's tech array contains the selected technology
      return project.technologies.filter(tech => tech.path === techPath).length > 0;
    }
  }

  const router = useRouter();

  const [menuItems, setMenuItems] = useState(getMenuItems());
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  useEffect(() => {
    // Set the selected technology once the router is ready and as long as something has changed:
    if (router.isReady && router.query.tech !== selectedTechnology) {
      setSelectedTechnology(technologies.find(tech => tech.path === router.query.tech));
      setFilteredProjects(projects.filter(project => checkProjectIsApplicable(project, router.query.tech)));
    }
  }, [router])

  function Opener() {
    return <span className="hover:cursor-pointer hover:opacity-80 duration-200 px-4 py-2 bg-secondarydark rounded-md">Filter by Technology</span>;
  }

  return (
    <div className="bg-gray-200">
      <Section fullHeight={true}>
        <Title><span className="hover:cursor-pointer"><Link href="/projects">Projects</Link></span></Title>
        <div className="text-center pb-5">
          {!selectedTechnology ?
            <Dropdown opener={Opener} items={menuItems} />
            : "Showing projects that implement: " + selectedTechnology.alt
          }
        </div>
        <Feed items={filteredProjects} />
      </Section>
    </div>
  );
};

Projects.title = "Projects";
Projects.description = "View my portfolio.";
export default Projects;

export async function getStaticProps() {
  const technologies = await getTechnologies();
  const projects = await getProjects();

  return {
    props: { technologies: technologies, projects: projects },
  }
};