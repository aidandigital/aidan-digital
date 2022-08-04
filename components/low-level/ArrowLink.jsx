const ArrowLink = ({ children }) => (
  <span
    className="hover:cursor-pointer decoration-dashed hover:opacity-60 duration-200"
    style={{ borderBottom: "1.5px dashed black" }}
    >
    {children} →
  </span>
);

export default ArrowLink;
