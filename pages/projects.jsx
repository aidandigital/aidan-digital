import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Section from '../components/high-level/Section'
import Title from '../components/low-level/Title'
import Feed from '../components/low-level/Feed'
import Dropdown from '../components/low-level/Dropdown'
import Link from 'next/link'
import { getTechnologies, getProjects } from '../db/controllers.js'

export default function Projects({ technologies, projects }) {
  // Map technologies array into a form that can be accepted by Menu:
  function getMenuItems() {
    return technologies.map(technology => ({
      name: technology.alt,
      href: `/projects?technology=${technology._id}`,
    }));
  }

  function checkProjectIsApplicable(project, tech_id) {
    if (!tech_id) { // If no technology is selected, the project is applicable
      return true;
    } else { // Otherwise check if the project's tech array contains the selected technology
      return project.technologies.filter(tech => tech._id === tech_id).length > 0;
    }
  }

  const router = useRouter();

  useEffect(() => {
    // Set the selected technology once the router is ready and as long as something has changed:
    if (router.isReady && router.query.technology !== selectedTechnology) {
      setSelectedTechnology(technologies.find(tech => tech._id === router.query.technology));
      setFilteredProjects(projects.filter(project => checkProjectIsApplicable(project, router.query.technology)));
    }
  }, [router])

  const [menuItems, setMenuItems] = useState(getMenuItems());
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  function Opener() {
    return <span className="hover:cursor-pointer hover:opacity-80 duration-200 px-4 py-2 bg-secondarydark rounded-md">Filter by Technology</span>;
  }

  return (
    <>
      <Section background="gray-200">
        <Title><span className="hover:cursor-pointer"><Link href="/projects">Projects</Link></span></Title>
        <div className="text-center pb-5">
          {!selectedTechnology ?
            <Dropdown opener={Opener} items={menuItems} />
            : "Showing projects that implement: " + selectedTechnology.alt
          }
        </div>
        <Feed items={filteredProjects} />
      </Section>
    </>
  );
};

export async function getStaticProps() {
  const technologies = await getTechnologies();
  const projects = await getProjects(3);

  return {
    props: { technologies: technologies, projects: projects },
  }
};