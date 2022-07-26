import React from 'react'

const Persons = ({persons}) => {
  return (
    <div>
      <ul>
        {persons.map((person, i) => (
          <li key={i}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Persons