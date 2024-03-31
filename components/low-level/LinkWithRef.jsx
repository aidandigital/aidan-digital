import { useRouter } from 'next/router';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const LinkWithRef = ({ children, href, rel }) => {
    const router = useRouter();
    const fullPath = href + "?ref=" + baseUrl + router.pathname;

    return (
        <Link href={fullPath} rel={rel}>{children}</Link>
    );
};

export default LinkWithRef;