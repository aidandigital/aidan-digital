import { Component } from "react";
import Section from "../components/high-level/Section";
import TextInput from "../components/low-level/TextInput";
import ParagraphInput from "../components/low-level/ParagraphInput";
import Title from "../components/low-level/Title";
import ArrowLink from "../components/low-level/ArrowLink";
import Submit from "../components/low-level/Submit";
import Checkbox from "../components/low-level/Checkbox";
import { useRouter } from "next/router";

class ReportBug extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: "report-bug",
            url: "",
            email: "",
            body: "",
            wantsEmailBack: false,
            ref: "",
            user_id: "",
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
        this.setState({ wantsEmailBack: newValue })
    }

    render() {
        return (
            <Section>
                <Title color="black">Report a Bug</Title>
                <div className="md:flex md:items-stretch">
                    <div className="block md:inline-block md:w-1/2 px-4">
                        <label>URL of the Issue</label>
                        <TextInput placeholder="Copy the link of the issue and paste it here." name="url" value={this.state.url} onChange={this.setInput}></TextInput>
                        <label>Description*</label>
                        <ParagraphInput placeholder="What happened?" name="body" rows="5" value={this.state.body} onChange={this.setInput}></ParagraphInput>
                        <Checkbox customStateSetter={this.setCheckboxInput} value={this.state.wantsEmailBack} label="I would like an email back." />
                        {this.state.wantsEmailBack ?
                        <>
                            <label>Email*</label>
                            <TextInput name="email" value={this.state.email} onChange={this.setInput}></TextInput>
                        </>
                        : null}
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

function ReportBugFunctional() {
    const router = useRouter();

    return (
        <ReportBug router={router} />
    );
}

ReportBugFunctional.useAltLayout = true;

export default ReportBugFunctional;