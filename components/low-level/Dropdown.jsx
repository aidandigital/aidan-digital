import { useState } from "react";
import Link from "next/link";
import Button from "./Button";

const DropdownMenu = ({ opener, background, items, emphasizeLastItem }) => {
    const [open, setOpen] = useState(false);
    const Opener = opener;

    function closeMenu() {
        setOpen(false);
    }
    function openMenu() {
        setOpen(true);
    }

    let regularItems = [];
    let emphasizedItem = null;

    if (emphasizeLastItem) {
        regularItems = items.slice(0, -1);
        emphasizedItem = items[items.length - 1];
    } else {
        regularItems = items;
    }

    if (open) {
        return (
            <span>
                <ul className={"slidingcover mx-1 px-7 py-5 bg-" + (background ? background : "gray-100")}>
                    <li className="block px-3 py-2 mb-3 text-gray-800 hover:bg-white hover:cursor-pointer">
                        <div onClick={closeMenu}>X <span className="ml-1">Close</span></div>
                    </li>
                    {regularItems.map((item, i) => (
                        <Link href={item.href} key={i}>
                            <li onClick={closeMenu} className="block px-3 py-2 text-gray-600 hover:bg-white hover:cursor-pointer">
                                {/* Close the menu when switching pages since NextJS does soft refreshes and the menu would still be open otherwise */}
                                {item.name}
                            </li>
                        </Link>
                    ))}
                    {emphasizeLastItem ? (
                    <li className="my-3">
                        <span onClick={closeMenu}>
                            <Link href={emphasizedItem.href}>
                                <Button>{emphasizedItem.name}</Button>
                            </Link>
                        </span>
                    </li>
                    ): null}
                </ul>
            </span>
        )
    } else {
        return (
            <span onClick={openMenu}><Opener /></span>
        )
    }
}

export default DropdownMenu;