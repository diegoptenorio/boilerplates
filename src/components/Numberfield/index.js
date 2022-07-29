const Numberfield = ({
    disabled = false,
    maxLength = null,
    placeholder = '',
    readonly = false,
    value = ''
}) => (
    <input
        className="border-2 border-grey my-4"
        disabled={disabled}
        maxLength={maxLength}
        type='number'
        placeholder={placeholder}
        readOnly={readonly}
        defaultValue={value}
    />
);

export default Numberfield;