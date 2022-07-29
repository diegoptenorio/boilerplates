const Button = ({ action = null, disabled = false, text = ''}) => (
    <button
        className="block w-max mx-auto text-sm font-semibold rounded-full bg-grey py-2 px-4"
        disabled={disabled}
        onClick={action}
    >
        {text}
    </button>
);

export default Button;