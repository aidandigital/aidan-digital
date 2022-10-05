import Link from "next/link";
import Button from "../low-level/Button";
import Dropdown from "../low-level/Dropdown";
import Menu from "../low-level/Menu";
import clickOnEnter from "../../utils/clickOnEnter";
import LinkWithRef from "../low-level/LinkWithRef";

function Header() {
  const menuOpener = () => (
    <div className="hover:cursor-pointer mr-2">
      <div className="w-10 h-0.5 bg-gray-500 mt-1.5"></div>
      <div className="w-10 h-0.5 bg-gray-500 mt-1.5"></div>
      <div className="w-10 h-0.5 bg-gray-500 mt-1.5"></div>
    </div>
  );

  const menuItems = [
    {name: "About", href: "/about"},
    {name: "Tech", href: "/#tech"},
    {name: "Projects", href: "/projects"},
    {name: "Contact", href: "/contact", withRef: true},
  ];

  return (
    <header className="bg-gray-100 px-3 py-1 md:px-5 md:py-1.5 flex items-center justify-between shadow">
      <div className="flex items-center">
        <div className="inline-block">
          <Link href="/">
            <div tabIndex="1" onKeyDown={clickOnEnter} className="hover:cursor-pointer">
              <i className="icon-ad text-5xl" />
              <div className="text-xs text-gray-600 ml-2" style={{letterSpacing: "2px"}}>Aidan Digital</div>
            </div>
          </Link>
        </div>
        <div className="hidden md:inline-block px-5 h-full">
          <Menu items={menuItems.slice(0, -1)} />
        </div>
      </div>
      <div className="hidden md:inline-block">
        <LinkWithRef href="/contact">
          <Button>Contact</Button>
        </LinkWithRef>
      </div>
      <div className="inline-block md:hidden">
        <Dropdown requireClick={true} opener={menuOpener} items={menuItems} emphasizeLastItem={true} />
      </div>
    </header>
  )
}

export default Header;