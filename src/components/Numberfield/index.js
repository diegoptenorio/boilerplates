const Numberfield = ({
    disabled = false,
    placeholder = '',
    readonly = false,
    value = ''
}) => (
    <input
        className="border-2 border-grey my-4"
        disabled={disabled}
        type='number'
        placeholder={placeholder}
        readOnly={readonly}
        defaultValue={value}
    />
);

export default Numberfield;