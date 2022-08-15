import Menu from "../low-level/Menu";
import Link from "next/link";
import UnderlineLink from "../low-level/UnderlineLink";

export default function Footer() {
  const menuItems = [
    {name: "Report a Bug", href: "/report-bug", withRef: true, target: "_blank"},
    {name: "Copyright info for References", href: "/references"},
  ];

  return (
    <footer className="p-4 mt-3">
      <div className="p-5 mt-3 text-center">
        <Menu items={menuItems} fontSize="base" pipes={true} />
      </div>
      <p className="text-center text-xs">&copy; {new Date().getFullYear()} Aidan Digital, excluding <UnderlineLink><Link href="/references">references</Link></UnderlineLink>. All rights reserved.</p>
    </footer>
  );
}