import { useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
// const handleFilter = persons.filter(
//   (person) =>
//     person.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) > -1
// );

  const changeName = (event) => {
    setNewName(event.target.value);
  };
  const changeNumber = (event) => {
    setNewNumber(event.target.value);
  }
  const handleFilter = (event) => {
    setFilter(event.target.value);
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
      
       <Filter 
       filter={filter}
       handleFilter={handleFilter}
       />       
      <h4>Add a new</h4>
      <PersonForm
      addName ={addName}
      newName ={newName}
      newNumber={newNumber}
      changeName={changeName}
      changeNumber={changeNumber}

      />
            <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  );
};

export default App;
