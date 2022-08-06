import Section from "../components/high-level/Section";
import Title from "../components/low-level/Title";
import Button from "../components/low-level/Button";
import Link from "next/link";
import UnderlineLink from "../components/low-level/UnderlineLink";

function References() {
    const year = new Date().getFullYear();
    return (
        <div className="text-center">
            <Section>
                <Title>Trademark info for References</Title>
                Throughout this website, other websites I own, and other means of marketing/communication/documentation, I reference external software products and services. For example, in the section "Technologies that I use" on this website, I display certain logos of products/services that I have used to develop/publish at least one of my projects. <strong>I am not endorsed, sponsored by, or affiliated with any of the external software products/services that I may reference.</strong> If I have mistakenly referred to a product/service in a way that infringes on it's copyright or trademark policy, please fill out the following form immediately to have it swiftly altered or removed:
                <div className="mt-8">
                    <Button>
                        <Link href="/copyright-infringement">Report copyright infringement</Link>
                    </Button>
                </div>
                <div className="mt-8">
                    Attribution is a requirement detailed in some of my references' trademark policies. The table below lists all of the references I make that have this requirement. If I have mistakenly excluded a reference from this list that needs to be on it, please fill out the preceding form immediately to have it swiftly added:
                </div>
                <table className="mt-10 w-full">
                    <tbody>
                        <tr>
                            <td>Reference</td><td>Attribution</td>
                        </tr>
                        <tr>
                            <td>Express</td>
                            <td>
                                Express is licensed under a <UnderlineLink><Link href="https://creativecommons.org/licenses/by-sa/3.0/us/">Creative Commons Attribution-ShareAlike 3.0 United States License</Link></UnderlineLink>.
                                Express is a project of the OpenJS Foundation, copyright &#169; 2017 StrongLoop, IBM, and other expressjs.com contributors.
                                Link to material: <UnderlineLink><Link href="https://expressjs.com">Express</Link></UnderlineLink>
                            </td>
                        </tr>
                        <tr>
                            <td>AWS</td>
                            <td>
                                Amazon Web Services, AWS, and the Powered by AWS logo are trademarks of Amazon.com, Inc. or its affiliates.
                            </td>
                        </tr>
                        <tr>
                            <td>Java</td>
                            <td>
                                Oracle, Java, and MySQL are registered trademarks of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.
                            </td>
                        </tr>
                        <tr>
                            <td>Python</td>
                            <td>
                                "Python" and the Python logos are trademarks or registered trademarks of the Python Software Foundation, used by this website with permission from the Foundation.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Section>
        </div>
    );
};

References.useAltLayout = true;

export default References;