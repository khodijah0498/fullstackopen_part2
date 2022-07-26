import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const changeName = (event) => {
    setNewName(event.target.value);
  };
  const changeNumber = (event) => {
    setNewNumber(event.target.value);
  }
  const addName = (e) => {
    e.preventDefault();

    const findName = persons.find((person) => person.name === newName);
    if (findName) {
      alert(`${newName} is already added to phonebook`);
      setPersons([...persons]);
    } else {
      setPersons([...persons, { name: newName, number: newNumber}]);
    }

     };

  return (
    <div>
      <h2>Phonebook</h2>
      <h4>add a new</h4>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={changeName} />
          number: <input value={newNumber} onChange={changeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => (
          <li key={i}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
