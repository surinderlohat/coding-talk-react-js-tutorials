import { useState } from "react";
import { InputControl } from "./Components";
import { validateField } from "./Utilties/validation";

function App() {
  const [user, setUser] = useState({
    firstName: {
      value: "",
      hasError: false,
      errorMessage: false,
      rules: [
        // { name: "min", value: 2 },
        // { name: "max", value: 10 },
        { name: "between", value: [2, 10] },
      ],
    },
    lastName: {
      value: "",
      hasError: false,
      errorMessage: false,
      rules: [{ name: "max", value: 5 }],
    },
    address: {
      value: "",
      hasError: false,
      errorMessage: false,
      rules: [{ name: "regex", value: /^[0-9]/ }],
    },
    favFruit: {
      value: "",
      hasError: false,
      errorMessage: false,
      rules: [{ name: "required", value: true }],
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("user", user);
  };

  const onChange = (fieldKey, value) => {
    setUser((_user) => ({
      ..._user,
      [fieldKey]: {
        ..._user[fieldKey],
        value,
        errorMessage: validateField(_user[fieldKey].rules, value),
      },
    }));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputControl
          label="First Name"
          value={user.firstName.value}
          onChange={(value) => onChange("firstName", value)}
          errorMessage={user.firstName.errorMessage}
        />

        <InputControl
          label="Last Name"
          value={user.lastName.value}
          onChange={(value) => onChange("lastName", value)}
          errorMessage={user.lastName.errorMessage}
        />

        <InputControl
          label="Address"
          value={user.address.value}
          inputType="textAra"
          onChange={(value) => onChange("address", value)}
          errorMessage={user.address.errorMessage}
        />

        <InputControl
          label="Fav Fruit"
          value={user.favFruit.value}
          inputType="select"
          options={["A", "B", "C", "D"]}
          onChange={(value) => onChange("favFruit", value)}
          errorMessage={user.favFruit.errorMessage}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
