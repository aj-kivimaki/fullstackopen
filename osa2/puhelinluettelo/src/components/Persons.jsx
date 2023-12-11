const Persons = ({ persons, filterTerm, handleClick }) =>
  persons
    .filter((person) =>
      person.name.toLowerCase().includes(filterTerm.toLowerCase())
    )
    .map((person) => (
      <div key={person.name}>
        <p>
          {person.name}: {person.number}
        </p>
        <button id="delete" onClick={() => handleClick(person.id, person.name)}>
          x
        </button>
      </div>
    ));

export default Persons;
