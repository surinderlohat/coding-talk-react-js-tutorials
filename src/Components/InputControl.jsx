// input | textAra | select
// value , onChange , options
const InputTypes = ({ inputType = "input", ...otherProps }) => {
  switch (inputType) {
    case "input":
      return (
        <input
          type="text"
          value={otherProps.value}
          onChange={(e) => otherProps.onChange(e.target.value)}
        />
      );
    case "textAra":
      return (
        <textarea
          type="text"
          value={otherProps.value}
          onChange={(e) => otherProps.onChange(e.target.value)}
        />
      );
    case "select":
      return (
        <select
          value={otherProps.value}
          onChange={(e) => {
            debugger;
            otherProps.onChange(e.target.value);
          }}
        >
          {otherProps.options?.map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
      );
    default:
      break;
  }
};

export const InputControl = ({ label, errorMessage, ...otherProps }) => {
  return (
    <div>
      <label>
        {label}
        <InputTypes {...otherProps} />
        <p style={{ color: "red" }}>{errorMessage}</p>
      </label>
    </div>
  );
};
