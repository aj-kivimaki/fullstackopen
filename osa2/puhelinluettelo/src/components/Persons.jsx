const Persons = ({ persons, filterTerm }) =>
  persons
    .filter((person) =>
      person.name.toLowerCase().includes(filterTerm.toLowerCase())
    )
    .map((person) => (
      <p key={person.name}>
        {person.name} {person.number}
      </p>
    ));

export default Persons;
