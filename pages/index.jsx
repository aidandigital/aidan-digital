import Section from '../components/high-level/Section'
import ArrowLink from '../components/low-level/ArrowLink'
import Link from 'next/link'
import SubTitle from '../components/low-level/SubTitle'
import Typewriter from '../components/low-level/Typewriter'
import InfiniteCarousel from '../components/low-level/InfiniteCarousel'
import Feed from '../components/low-level/Feed'
import externalImageLoader from '../utils/externalLogoLoader'
import { getTechnologies, getProjects } from '../db/controllers.js'

function Home({ technologies, projects }) {
  return (
    <>
      <div className="px-10 md:px-20 py-24 md:py-40">
        <div>
          <h1 className="typewriter font-serif text-3xl md:text-5xl">
            <Typewriter>I'm Aidan, a student and full-stack developer. </Typewriter>
          </h1>
        </div>
        <ArrowLink>
          <Link href="/projects">See what I've done</Link>
        </ArrowLink>
      </div>
      <Section>
        <SubTitle id="tech">Technologies that I use</SubTitle>
        <p className="text-center mb-10">Click any icon below to view projects that implement it</p>
        <InfiniteCarousel images={technologies} externalImageLoader={externalImageLoader} />
        <br />
      </Section>
      <Section background="gray-100">
        <SubTitle>Some of my Work</SubTitle>
        <Feed items={projects} />
        <div className="text-center m-6">
          <ArrowLink><Link href="/projects">View all projects</Link></ArrowLink>
        </div>
      </Section>
    </>
  );
};

Home.description = "I'm Aidan, a full stack website developer.";
export default Home;

export async function getStaticProps() {
  const technologies = await getTechnologies();
  const projects = await getProjects(3);

  return {
    props: { technologies: technologies, projects: projects },
  }
};