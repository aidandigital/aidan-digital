import { Component } from "react";
import Section from "../components/high-level/Section";
import TextInput from "../components/low-level/TextInput";
import ParagraphInput from "../components/low-level/ParagraphInput";
import Title from "../components/low-level/Title";
import Submit from "../components/low-level/Submit";
import { useRouter } from "next/router";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import externalLogoLoader from "../utils/externalLogoLoader";
import Image from "next/image";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: "contact",
            name: "", // use empty "" instead of null on purpose
            email: "",
            body: "",
            ref: "",
            user_id: "",
            stateFilledFromQuery: false // for use with withRouter, not indicating wether query parameters were used
        };
    }

    fillStateFromQuery() {
        if (this.props.router.isReady && !this.state.stateFilledFromQuery) {
            for (let key in this.props.router.query) {
                this.setState({ [key]: this.props.router.query[key] });
            }
            this.setState({ stateFilledFromQuery: true });
        }
    }

    componentDidUpdate() {
        this.fillStateFromQuery();
    }
    componentDidMount() {
        this.fillStateFromQuery();
    }

    setInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Section>
                <Title color="black">Contact</Title>
                <div className="md:flex md:items-stretch">
                    <div className="block md:inline-block md:w-1/2 px-4">
                        <label>Name*</label>
                        <TextInput name="name" value={this.state.name} onChange={this.setInput}></TextInput>
                        <label>Email*</label>
                        <TextInput name="email" value={this.state.email} onChange={this.setInput}></TextInput>
                        <label>Message*</label>
                        <ParagraphInput name="body" rows="5" value={this.state.body} onChange={this.setInput}></ParagraphInput>
                        <Submit data={this.state} path="/general-forms">Submit</Submit>
                    </div>
                    <div className="mt-10 md:mt-0 block md:inline-block md:w-1/2 px-4 md:px-12 text-center">
                        <div className="h-full bg-gray-100 py-6 md:py-0">
                            <div className="md:relative md:top-1/3">
                                <div className="font-bold">Other options:</div>
                                <br />
                                <a href="mailto:contact@aidandigital.com" className="hover:cursor-pointer hover:opacity-70 duration-200">
                                    <EnvelopeIcon className="hidden h-5 md:inline-block mx-3" />
                                    contact@aidandigital.com
                                </a>
                                <br />
                                <br />
                                <a href="https://www.linkedin.com/in/aidan-fullstack/" className="hover:cursor-pointer hover:opacity-70 duration-200">
                                    <span className="mx-2.5 relative top-1"><Image loader={externalLogoLoader} src="linkedin.svg" width="25" height="25" alt="" /></span>
                                    LinkedIn® Profile
                                </a>
                                <br />
                                <br />
                                <a href="https://github.com/aidandigital" className="hover:cursor-pointer hover:opacity-70 duration-200">
                                    <span className="mx-3 relative top-1"><Image loader={externalLogoLoader} src="github-2.svg" width="20" height="20" alt="" /></span>
                                    Github Profile
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
};

function ContactFunctional() {
    const router = useRouter();

    return (
        <Contact router={router} />
    );
}

ContactFunctional.title = "Contact";
ContactFunctional.description = "Reach out to me.";
export default ContactFunctional;