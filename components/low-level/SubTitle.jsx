const SubTitle = (props) => (
    <h2 {...props} className={"text-" + (props.align ? props.align : "center") + " text-2xl px-2 py-9 md:text-3xl md:py-10 xl:p-10 tracking-normal font-" + (props.notBold ? "" : "bold") + " text-" + (props.color ? props.color : "black")}>{props.children}</h2>
)

export default SubTitle;