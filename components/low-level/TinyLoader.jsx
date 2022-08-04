const TinyLoader = (props) => {
    const style = {
        border: "3px solid transparent",
        borderTop: "3px solid gray",
    }

    return (
    <div {...props} style={style} className="inline-block ml-4 relative top-2 w-8 h-8 rounded-full animate-spin"></div>
    )
}

export default TinyLoader;