import { useEffect, useState } from "react";
import Country from "./components/Country";
import CountryList from "./components/CountryList";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const handleChange = (e) => setSearch(e.target.value);

  useEffect(() => {
    setFiltered(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  const handleClick = (country) => setFiltered(country);

  return (
    <div className="app">
      <label htmlFor="country">find countries</label>
      <input type="text" id="country" name="coutry" onChange={handleChange} />
      {filtered.length < 10 ? (
        <CountryList filtered={filtered} handleClick={handleClick} />
      ) : (
        <div>Too many matches, specify another filter</div>
      )}
      {filtered.length === 1 && <Country filtered={filtered[0]} />}
      {filtered.length === 0 && <div>No matches</div>}
    </div>
  );
}

export default App;
