import Link from "next/link";
import LinkWithRef from "./LinkWithRef";

const Menu = ({items, fontSize, pipes}) => {
    const liClass = "hover:cursor-pointer hover:opacity-80 duration-200 inline-block text-gray-600 text-" + (fontSize ? fontSize : "lg");

    return (
        items.map((item, i) => (
            <li key={i} className="inline-block">
                <span className={liClass + " px-1.5 md:px-8"}>
                    {item.withRef ?
                    <LinkWithRef href={item.href}><a target={item.target}>{item.name}</a></LinkWithRef>
                    :
                    <Link href={item.href}><a target={item.target}>{item.name}</a></Link>
                    }
                </span>
                {pipes && i < items.length - 1 ? <span className={liClass + " text-gray-300 md:text-black"}>|</span> : null}
            </li>
        )
    )
    );
}

export default Menu;