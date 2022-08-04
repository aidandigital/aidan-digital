import Section from "../../components/high-level/Section";
import Title from "../../components/low-level/Title";
import SubTitle from "../../components/low-level/SubTitle";
import Answer from "../../components/low-level/Answer";
import Image from "next/image";
import Link from "next/link";
import externalLogoLoader from "../../utils/externalLogoLoader";
import externalThumbnailUrl from "../../utils/externalThumbnailUrl";
import { getProject, getProjects } from "../../db/controllers";

export default function Project({ project }) {
    const WebIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
    );

    return (
        <>
            <Section background="gray-200">
                <div className="md:flex items-center">
                    <div className="inline-block w-full md:w-1/2">
                        <span className="md:hidden"><Title>{project.name}</Title></span>
                        <Link href={project.webUrl}>
                            <div className="hover:cursor-pointer darken duration-200">
                                {/* We must use the regular img element since we don't know the width of the image and we are getting the image from an external source */}
                                <img src={externalThumbnailUrl(project.thumbnail)} />
                            </div>
                        </Link>
                    </div>
                    <div className="my-3 inline-block w-full md:w-1/2 text-center px-10">
                        <span className="hidden md:block"><Title>{project.name}</Title></span>
                        <div className="w-fit m-auto mb-5 hover:cursor-pointer hover:opacity-70 duration-200">
                            <a href={project.webUrl}>
                                <span className="inline-block mx-2.5 relative top-1.5"><WebIcon /></span>
                                Visit Website
                            </a>
                        </div>
                        <Link href={project.githubUrl}>
                            <div className="w-fit m-auto mb-5 hover:cursor-pointer hover:opacity-70 duration-200">
                                <span className="mx-3 relative top-1"><Image loader={externalLogoLoader} src="github-2.svg" width="20" height="20" /></span>
                                View on GitHub
                            </div>
                        </Link>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="text-left">
                    <div className="md:flex align-start">
                        <div className="inline-block w-full md:w-1/2">
                            <SubTitle notBold={true}>Technologies used</SubTitle>
                            <ul class="list-inside list-disc text-center">
                                {project.technologies.map((tech, i) => (
                                    <li key={i}>{tech.alt}</li>
                                )) }
                            </ul>
                        </div>
                        <div className="inline-block w-full md:w-1/2">
                            <SubTitle notBold={true}>Features</SubTitle>
                            <ul class="list-inside list-disc text-center">
                                {project.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                )) }
                            </ul>
                        </div>
                    </div>
                    <SubTitle notBold={true} align="left">Description</SubTitle>
                    <Answer>{project.description}</Answer>
                    <br />
                    {project.sections.length > 0 ? project.sections.map((section, i) => (
                        <div className="align-left" key={i}>
                            <SubTitle notBold={true} align="left">{section.name}</SubTitle>
                            <Answer>{section.body}</Answer>
                            <br />
                        </div>
                    )) : null}
                </div>
        </Section>
        </>
    );
};

export async function getStaticProps(context) {
    const project = await getProject(context.params.projectPath);
    console.log(project)

    return {
        props: { project: project },
    }
};

export async function getStaticPaths() {
    const projects = await getProjects();
    const projectPaths = projects.map(project => ({ params: {projectPath: project.path} }));

    return {
        paths: projectPaths,
        fallback: false,
    };;
}