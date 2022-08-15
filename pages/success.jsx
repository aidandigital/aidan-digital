import { useRouter } from "next/router";
import sentSvg from "../public/sent.svg";
import Image from "next/image";
import ArrowLink from "../components/low-level/ArrowLink";
import Link from "next/link";

function Success() {
    const { query } = useRouter();

    const messages = [
        `Any data associated with ${query.email ? query.email : "your email"} has been queued for deletion. It may take a few days or more to complete your request. Your data will be removed automatically once done and you will not receive a confirmation email.`,
        `Your data request has been queued. It may take a few days or more before a downloadable file is sent to ${query.email ? query.email : "your email"}.`
    ]

    return (
        <div className="text-center">
            <div>
                <h1 className="mt-10 md:mt-20 text-3xl">{query.messageIndex ? "Success!" : "Sent successfully!"}</h1>
                {query.messageIndex ? <p className="mx-4 lg:mx-52 mt-2">{messages[query.messageIndex]}</p> : null}
                <br />
                <ArrowLink><Link href="/">Back to Home</Link></ArrowLink>
            </div>
            <Image src={sentSvg} height="400"></Image>
        </div>
    )
};

Success.useAltLayout = true;
Success.title = "Success";

export default Success;