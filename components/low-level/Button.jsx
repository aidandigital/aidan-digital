const Button = (props) => (
  <button
    {...props}
    className="m-1 px-5 py-1.5 text-xl tracking-wider text-white hover:opacity-90 duration-200"
    style={{
      backgroundImage:
        "linear-gradient(to bottom right, rgb(44, 125, 250), rgb(44, 194, 228))",
    }}>
    {props.children}
  </button>
);

export default Button;
