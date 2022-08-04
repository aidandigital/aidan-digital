const Section = ({ background, fullHeight, children }) => (
    <div className={`px-6 py-3 md:px-16 xl:px-16 xl:py-7 bg-${background ? background : "white"} ${fullHeight ? "min-h-screen" : ""}`}>{children}</div>
);

export default Section;