const Persons = ({ persons, filterTerm, handleClick }) =>
  persons
    .filter((person) =>
      person.name.toLowerCase().includes(filterTerm.toLowerCase())
    )
    .map((person) => (
      <p key={person.name}>
        {person.name} {person.number}{" "}
        <button onClick={() => handleClick(person.id, person.name)}>
          delete
        </button>
      </p>
    ));

export default Persons;
