import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [favFruit, setFavFruit] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("firstName", firstName);
    console.log("lastName", lastName);
    console.log("address", address);
    console.log("favFruit", favFruit);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            First Name
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Address
            <textarea
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Fav Fruit
            <select value={favFruit} onChange={(e) => setFavFruit(e.target.value)}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
