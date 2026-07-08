import Menu from "../low-level/Menu";
import Link from "next/link";
import UnderlineLink from "../low-level/UnderlineLink";

const GITHUB_PROFILE = process.env.NEXT_PUBLIC_GITHUB_PROFILE

export default function Footer() {
  const menuItems = [
    {name: "Report a Bug", href: "/report-bug", withRef: true},
    {name: "GitHub Profile", href: GITHUB_PROFILE, target: "_blank", rel: "noreferrer"} /* The flag rel: "noreferrer" is a security requirement when using target: "_blank". */
  ];

  const mobileMenuItems = [
    {name: "Report a Bug", href: "/report-bug", withRef: true},
    {name: "GitHub", href: GITHUB_PROFILE, target: "_blank", rel: "noreferrer"}
  ];

  return (
    <footer className="p-4 mt-3">
      <div className="hidden md:block p-5 mt-3 text-center">
        <Menu items={menuItems} fontSize="base" pipes={true} />
      </div>
      <div className="md:hidden p-5 mt-3 text-center">
        <Menu items={mobileMenuItems} fontSize="base" pipes={true} />
      </div>
      <p className="text-center text-xs">&copy; {new Date().getFullYear()} Aidan Digital. All rights reserved. <UnderlineLink><Link href="/references">Copyright Info for References</Link></UnderlineLink></p>
    </footer>
  );
}