import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('');
  const handleInputChange = (event) => {
    setNewName(event.target.value);
  }
  const personExists = () => {
    return persons.some(person => person.name === newName)
  }

  const addPerson = (event) => {
    event.preventDefault();
    console.log(personExists());
    if (personExists()) {
      alert(`${newName} ia already added to phonebook`)
    } else {
      const newPerson = {
        name: newName
      }
      setPersons(persons.concat(newPerson));
    }
    
    setNewName('');
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App