import Section from "../components/high-level/Section";
import Title from "../components/low-level/Title";
import Button from "../components/low-level/Button";
import LinkWithRef from "../components/low-level/LinkWithRef";

function BackendHidden() {
  return (
    <div className="text-center">
        <Section fullHeight={true}>
            <Title>Backend Code Hidden</Title>
            For security reasons, this server side code is located in a private repo. If you are a developer or recruiter and wish to view this repository, please request so below:
            <div className="mt-8">
                <Button>
                    <LinkWithRef href="/contact">Request access</LinkWithRef>
                </Button>
            </div>
        </Section>
    </div>
  );
};

BackendHidden.useAltLayout = true;
BackendHidden.title = "Backend Code Hidden";
export default BackendHidden;