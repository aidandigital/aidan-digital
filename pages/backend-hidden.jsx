import Section from "../components/high-level/Section";
import Title from "../components/low-level/Title";
import Button from "../components/low-level/Button";
import LinkWithParams from "../components/low-level/LinkWithParams";

function BackendHidden() {
  const bodyText = "I would like to request access to the backend of <app name>. I am a <title> and you can verify this by <example: visiting my LinkedIn profile>."

  return (
    <div className="text-center">
        <Section fullHeight={true}>
            <Title>Backend Code Hidden</Title>
            For security reasons, this server side code is located in a private repo. If you are a developer or recruiter and wish to view this repository, please request so below:
            <div className="mt-8">
                <Button>
                    <LinkWithParams withRef={true} params={[{name: "body", value: bodyText}]} href="/contact">Request access</LinkWithParams>
                </Button>
            </div>
        </Section>
    </div>
  );
};

BackendHidden.useAltLayout = true;
BackendHidden.title = "Backend Code Hidden";
export default BackendHidden;