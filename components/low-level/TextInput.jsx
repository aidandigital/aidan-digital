const TextInput = (props) => (
    <div className="my-3">
        <input {...props} type="text" className="border-2 border-gray-600 placeholder-gray-500 px-5 py-2 mb-2 w-full focus:outline-none focus:border-opacity-0 focus:ring-2 focus:ring-secondarydark" />
    </div>
)

export default TextInput;