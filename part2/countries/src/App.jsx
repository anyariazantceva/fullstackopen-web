import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css'
import Countries from './components/Countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");
  const [resultCountries, setResultCountries] = useState([]);

  useEffect(() => {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => {
          setCountries(response.data)
        })
  }, [])

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setValue(query);
    filterCountries(query); // Filter based on the updated input value
  }
  
  const filterCountries = (query) => {
    setResultCountries(countries.filter((country) => {
      return country.name.common.toLowerCase().includes(query);
  }))}


  return (
    <div>
      find countries <input value={value} onChange={handleChange} />
      <Countries resultCountries={resultCountries}/>
    </div>
  )
}

export default App
