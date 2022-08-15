import { useRouter } from 'next/router';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const LinkWithParams = ({ children, href, withRef, params }) => {
    const router = useRouter();

    // Init full path with ref if desired:
    let fullPath = href + (withRef ? ("?ref=" + baseUrl + router.pathname) : "");
    params.forEach(param => {
        fullPath += "&" + param.name + "=" + param.value;
    })

    return (
        <Link href={fullPath}>{children}</Link>
    );
};

export default LinkWithParams;