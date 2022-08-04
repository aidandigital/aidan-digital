import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TinyLoader from "./TinyLoader";
import axios from "axios";

const Submit = ({path, data, children, successMessageIndex, successDisplayEmail}) => {
    const [message, setMessage] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    useEffect(() => {
        if (message) {
            setMessage(false); // Reset message one user starts typing again
        }
    }, [data]);

    function switchToSuccess() {
        router.push({
            pathname: "success",
            query: {
                messageIndex: successMessageIndex,
                email: successDisplayEmail
            }
        });
    };

    function submit() {
        setLoading(true);
        axios.post("https://formsubmit.aidandigital.com" + path, data).then(res => {
            if (!res.data.success) {
                setMessage(res.data.message);
            } else {
                setSuccess(true);
            }
        }).catch(err => {
            setMessage("An error occured, please try again later.");
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <>
            <button
            onClick={submit}
            disabled={loading}
            className={`m-1 px-5 py-1.5 text-xl tracking-wider text-black bg-secondarydark hover:opacity-90 duration-200 ` + (loading ? "opacity-50 hover:opacity-50 cursor-not-allowed" : null)}
            >
                {children}
            </button>
            {loading ? <span><span className="inline-block"><TinyLoader /></span><p className="ml-4 inline-block">Please be patient, this may take a moment.</p></span> : null}
            {message && !loading ? <p className="mx-1 md:mx-4 my-2 md:my-0 block md:inline-block text-red-500">{message}</p> : null}
            {success ? switchToSuccess() : null}
        </>
    );
};

export default Submit;