import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    personsService
    .getAll()
    .then(persons => {
      setPersons(persons)
    })
  }, [])

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value.toLowerCase());
    setPersons(persons.filter((person) => {
      return person.name.toLowerCase().includes(newFilter);
    }))    
  }
  const personExists = () => {
    return persons.some(person => person.name === newName)
  }

  const addPerson = (event) => {
    event.preventDefault();
    if (personExists()) {
      alert(`${newName} ia already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }

      personsService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      })
    }
    
    setNewName('');
    setNewNumber('');
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <PersonForm addPerson={addPerson} newName={newName} handleInputChange={handleInputChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App