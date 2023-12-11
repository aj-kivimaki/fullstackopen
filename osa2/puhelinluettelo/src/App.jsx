import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

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
            setMessage("Number updated");
            setTimeout(() => {
              setMessage(null);
            }, 2000);
          }
        }
      });

    const createPerson = () =>
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setMessage("New contact created");
        setTimeout(() => {
          setMessage(null);
        }, 2500);
      });

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
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
          setMessage("Contact deleted");
          setTimeout(() => {
            setMessage(null);
          }, 4000);
        })
        .catch((err) => {
          console.log(err.message);
          setPersons(persons.filter((person) => person.id !== id));
          setErrorMessage("This note was already deleted from the server");
          setTimeout(() => {
            setErrorMessage(null);
          }, 4000);
        });
    }
  };

  return (
    <div className="app flex">
      <h1>Phonebook</h1>
      <Filter filterTerm={filterTerm} setFilterTerm={setFilterTerm} />
      <h2>Add new contact</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filterTerm={filterTerm}
        handleClick={handleRemove}
      />
      <Notification message={message} errorMessage={errorMessage} />
    </div>
  );
};

export default App;
