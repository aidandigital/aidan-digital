import Link from "next/link";
import externalThumbnailUrl from "../../utils/externalThumbnailUrl";

const Feed = ({ items }) => {
    // Filter items wether they should be big or small on screen based on index:
    function getItems(arr, lookingForBig = true) {
        const oneThird = Math.floor(arr.length / 3);

        if (lookingForBig) {
            return arr.slice(0, oneThird);  
        } else {
            return arr.slice(oneThird);
        }
    };

    const Item = ({ item, isBig = true }) => (
        <div className="mt-5" style={{position: "relative"}} /* fix next/image layout=fill bug */>
            <div className={"w-full lg:text-center text-black lg:absolute " + (isBig ? "top-36" : "top-12")}>
                <p className="mt-4 mx-4 font-bold text-xl lg:text-2xl">{item.feedName}</p>
                <p className="mt-2 mb-4">Tech used: {item.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i}>{tech.alt +
                        (
                            i >= item.technologies.length - 1 ? "" :
                            ((i === 2) ? "..." : ",")
                        )
                    } </span>
                ))}</p>
            </div>
            <div className="w-full z-10 inline-block hover:cursor-pointer hover:opacity-90 lg:hover:opacity-40 darken duration-200 rounded-lg overflow-hidden 2xl:px-10 my-3">
                <Link href={"/projects/" + item.path}>
                    <div className="lg:hover:blur-sm duration-200">
                        <img src={externalThumbnailUrl(item.thumbnail)} alt="" />
                    </div>
                </Link>
            </div>
        </div>
    );

    return (
        <div className="lg:flex align-start my-5">
            {items.length > 0 ?
                <>
                    <div className="w-full lg:w-2/3 block lg:inline-block lg:pr-14">
                        {getItems(items).map((item, i) => (
                            <Item item={item} key={i} />
                        ))}
                    </div>
                    <div className="w-full lg:w-1/3 block lg:inline-block">
                        {getItems(items, false).map((item, i) => (
                            <Item item={item} key={i} isBig={false} />
                        ))}
                    </div>
                </>
            : <div className="w-full text-center italic">No projects matched your query.</div>}
        </div>
    );
};

export default Feed;