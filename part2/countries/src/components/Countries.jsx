import Country from "./Country"

const Countries = ({resultCountries}) => {
    if (resultCountries.length > 10) {
       return <div>Too many matches, specify another filter</div>
    } else if (resultCountries.length === 1) {
        return (
     <Country country={resultCountries[0]}/>)
    } else {
        return (
        <>
         {resultCountries.map((country) => {
            return <div key={country.name.common}>{country.name.common}</div>})}
        </>)
    }
}

export default Countries;