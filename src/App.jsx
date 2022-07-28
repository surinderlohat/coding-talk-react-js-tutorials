import { useState } from "react";

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

const InputControl = ({ label, ...otherProps }) => {
  return (
    <div>
      <label>
        {label}
        <InputTypes {...otherProps} />
      </label>
    </div>
  );
};

function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    address: "",
    favFruit: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("user", user);
  };

  const onChange = (fieldKey, value) =>
    setUser((_user) => ({
      ..._user,
      [fieldKey]: value,
    }));

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputControl
          label="First Name"
          value={user.firstName}
          onChange={(value) => onChange("firstName", value)}
        />

        <InputControl
          label="Last Name"
          value={user.lastName}
          onChange={(value) => onChange("lastName", value)}
        />

        <InputControl
          label="Address"
          value={user.address}
          inputType="textAra"
          onChange={(value) => onChange("address", value)}
        />

        <InputControl
          label="Fav Fruit"
          value={user.favFruit}
          inputType="select"
          options={["A", "B", "C", "D"]}
          onChange={(value) => onChange("favFruit", value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
