const Button = ({ type, className, ...props }) => (
    <button
        type={type}
        className={`${className} inline-flex items-center px-4 py-2 border-none border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150`}
        {...props}
    />
)

export default Button
