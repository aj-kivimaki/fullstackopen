import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };

    const updateNumber = () =>
      persons.map((person) => {
        if (person.name === newName) {
          const id = person.id;

          const confirmation = confirm(
            `${newName} is already added to phonebook, replace the old number with a new one?`
          );

          if (confirmation) {
            personService
              .update(id, personObject)
              .then((returnedPerson) =>
                setPersons(
                  persons.map((person) =>
                    person.id !== id ? person : returnedPerson
                  )
                )
              );
          }
        }
      });

    const createPerson = () =>
      personService
        .create(personObject)
        .then((returnedPerson) => setPersons(persons.concat(returnedPerson)));

    persons.some((person) => person.name === newName)
      ? updateNumber()
      : createPerson();

    setNewName("");
    setNewNumber("");
  };

  const handleRemove = (id, name) => {
    const confirmation = confirm(`Delete ${name} ?`);

    if (confirmation) {
      personService
        .remove(id)
        .then(() => setPersons(persons.filter((person) => person.id !== id)));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterTerm={filterTerm} setFilterTerm={setFilterTerm} />
      <h3>add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        newName={newName}
        newNumber={newNumber}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        filterTerm={filterTerm}
        handleClick={handleRemove}
      />
    </div>
  );
};

export default App;
