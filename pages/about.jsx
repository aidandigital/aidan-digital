import Section from "../components/high-level/Section";
import Title from "../components/low-level/Title";
import SubTitle from "../components/low-level/SubTitle";
import Answer from "../components/low-level/Answer";
import { getPage } from "../db/controllers";

function About({ pageData }) {
  return (
    <>
      <Section>
        <Title>About me</Title>
        <div className="text-left">
          {pageData.mainContent.map((item, i) => (
            <div key={i}>
              <SubTitle align="left">{item.title}</SubTitle>
              <Answer>{item.body}</Answer>
            </div>
          ))}
          <br />
          <SubTitle>Fun questions:</SubTitle>
          <Answer>
            {pageData.sideContent.map((item, i) => (
              <details className="hover:cursor-pointer my-3" key={i}> 
                <summary>{item.title}</summary>
                <p className="m-2">{item.body}</p>
              </details>
            ))}
          </Answer>
        </div>
      </Section>
    </>
  );
}

About.title = "About";
About.description = "Learn about my programming journey and what I do.";
export default About;

export async function getStaticProps() {
  const pageData = await getPage("about");
  return {
    props: {pageData: pageData}
  }
}
