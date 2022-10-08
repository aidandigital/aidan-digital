import Menu from "../low-level/Menu";
import Link from "next/link";
import UnderlineLink from "../low-level/UnderlineLink";

export default function Footer() {
  const menuItems = [
    {name: "Contact", href: "/contact", withRef: true},
    {name: "LinkedIn® Profile", href: "https://www.linkedin.com/in/aidan-fullstack/"},
    {name: "GitHub Profile", href: "https://github.com/aidandigital"}
  ];

  const mobileMenuItems = [
    {name: "Contact", href: "/contact", withRef: true},
    {name: "LinkedIn®", href: "https://www.linkedin.com/in/aidan-fullstack/"},
    {name: "GitHub", href: "https://github.com/aidandigital"}
  ];

  return (
    <footer className="p-4 mt-3">
      <div className="hidden md:block p-5 mt-3 text-center">
        <Menu items={menuItems} fontSize="base" pipes={true} />
      </div>
      <div className="md:hidden p-5 mt-3 text-center">
        <Menu items={mobileMenuItems} fontSize="base" pipes={true} />
      </div>
      <p className="text-center text-xs">&copy; {new Date().getFullYear()} Aidan Digital. All rights reserved. <UnderlineLink><Link href="/references">Copyright info for References</Link></UnderlineLink></p>
    </footer>
  );
}