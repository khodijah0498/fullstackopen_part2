import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas" },
    { name: "Sis Khadijah cv12" },
  ]);
  const [newName, setNewName] = useState("");

  const changeName = (event) => {
    setNewName(event.target.value);
  };
  const addName = (e) => {
    e.preventDefault();

    const findName = persons.find((person) => person.name === newName);
    if (findName) {
      alert(`${newName} is already added to phonebook`);
      setPersons([...persons]);
    } else {
      setPersons([...persons, { name: newName }]);
    }

     };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={changeName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => (
          <li key={i}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
