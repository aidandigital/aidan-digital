import Link from "next/link";
import clickOnEnter from "../../utils/clickOnEnter";

const AltHeader = () => (
    <header className="bg-gray-100 px-3 py-1 md:px-5 md:py-1.5 flex items-center justify-between">
    <div className="flex items-center">
        <div className="inline-block">
        <Link href="/">
            <div tabIndex="1" onKeyDown={clickOnEnter} className="hover:cursor-pointer">
            <i className="icon-ad text-5xl" />
            </div>
        </Link>
        </div>
    </div>
    </header>
);

export default AltHeader;