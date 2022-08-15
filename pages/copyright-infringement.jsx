import { Component } from "react";
import Section from "../components/high-level/Section";
import TextInput from "../components/low-level/TextInput";
import ParagraphInput from "../components/low-level/ParagraphInput";
import Title from "../components/low-level/Title";
import ArrowLink from "../components/low-level/ArrowLink";
import Submit from "../components/low-level/Submit";
import Checkbox from "../components/low-level/Checkbox";
import { useRouter } from "next/router";

class ReportCopyrightInfringement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: "copyright-infringement",
            url: "",
            name: "",
            email: "",
            body: "",
            ref: "",
            user_id: "",
            agreement: false,
            stateFilledFromQuery: false
        };
    }
    
    componentDidUpdate() {
        if (this.props.router.isReady && !this.state.stateFilledFromQuery) {
            for (let key in this.props.router.query) {
                this.setState({ [key]: this.props.router.query[key] });
            }
            this.setState({ stateFilledFromQuery: true });
        }
    }

    setInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    setCheckboxInput = (newValue) => {
        this.setState({ agreement: newValue })
    }

    render() {
        return (
            <Section>
                <Title color="black">Copyright Infringement Form</Title>
                <div className="md:flex md:items-stretch">
                    <div className="block md:inline-block md:w-1/2 px-4">
                        <label>Name*</label>
                        <TextInput placeholder="Enter your full legal name." name="name" value={this.state.name} onChange={this.setInput}></TextInput>
                        <label>URL of Infringing Material*</label>
                        <ParagraphInput placeholder="Put the URL, or multiple URL's of the materials that infringe on your copyrighted works." name="url" value={this.state.url} onChange={this.setInput}></ParagraphInput>
                        <label>Description of Copyrighted Work*</label>
                        <ParagraphInput placeholder="Describe and provide the location of the work, or works which you have copyrighted and are being infringed upon. You may also explain how this violation can be fixed (example: proper attribution), or if it must be entirely removed." name="body" rows="5" value={this.state.body} onChange={this.setInput}></ParagraphInput>
                        <label>Email*</label>
                        <TextInput name="email" value={this.state.email} onChange={this.setInput}></TextInput>
                        Agreement: I have a good faith belief that the use of the work(s) described above in the material(s) listed here is not authorized by the copyright owner, an agent of the copyright owner, or the law.
                        Under penalty of perjury, I attest that the information in this form is accurate and that I am, or am authorized to act on behalf of, the owner of the rights being infringed by the material listed above.
                        <Checkbox customStateSetter={this.setCheckboxInput} value={this.state.agreement} label="Agree" />
                        <Submit data={this.state} path="/general-forms">Submit</Submit>
                    </div>
                    <div class="mt-10 md:mt-0 block md:inline-block md:w-1/2 px-4 md:px-12 text-center">
                        <div className="h-full bg-gray-100 py-6 md:py-0">
                            <div className="md:relative md:top-1/3">
                                <div class="font-bold">Or email me directly at:</div>
                                <br />
                                <a href="mailto:contact@aidandigital.com">
                                    <ArrowLink>contact@aidandigital.com</ArrowLink>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
};

function ReportCopyrightInfringementFunctional() {
    const router = useRouter();

    return (
        <ReportCopyrightInfringement router={router} />
    );
}

ReportCopyrightInfringementFunctional.useAltLayout = true;
ReportCopyrightInfringementFunctional.title = "Report Copyright Infringement";

export default ReportCopyrightInfringement;