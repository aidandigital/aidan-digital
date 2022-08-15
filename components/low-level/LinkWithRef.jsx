import { useRouter } from 'next/router';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const LinkWithRef = ({ children, href }) => {
    const router = useRouter();
    const fullPath = href + "?ref=" + baseUrl + router.pathname;

    return (
        <Link href={fullPath}>{children}</Link>
    );
};

export default LinkWithRef;