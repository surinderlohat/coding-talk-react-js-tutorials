import { useState } from "react";

const InputTypes = ({ inputType = "input", value, onChange, options }) => {
  switch (inputType) {
    case "input":
      return (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    case "testArea":
      return (
        <textarea
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    case "select":
      return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          {options.map((x) => (
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

// input type can be input | testArea | select
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

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [address, setAddress] = useState("");
  // const [favFruit, setFavFruit] = useState("");

  const updateUserFields = (key, value) =>
    setUser((user) => {
      return { ...user, [key]: value };
    });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("user", user);
    // console.log("lastName", lastName);
    // console.log("address", address);
    // console.log("favFruit", favFruit);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputControl
          label="First Name"
          value={user.firstName}
          onChange={(value) => updateUserFields("firstName", value)}
        />

        <InputControl
          label="Last Name"
          value={user.lastName}
          onChange={(value) => updateUserFields("lastName", value)}
        />

        <InputControl
          label="Address"
          value={user.address}
          inputType="testArea"
          onChange={(value) => updateUserFields("address", value)}
        />

        <InputControl
          label="Fav Fruit"
          value={user.favFruit}
          inputType="select"
          options={["Grapefruit", "Lime", "Coconut", "Mango"]}
          onChange={(value) => updateUserFields("favFruit", value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
