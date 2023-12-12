import { useEffect, useState } from "react";
import Country from "./components/Country";
import CountryList from "./components/CountryList";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const handleChange = (e) => setSearch(e.target.value);

  const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <label htmlFor="country">find countries</label>
      <input type="text" id="country" name="coutry" onChange={handleChange} />
      {filtered.length < 10 ? (
        <CountryList filtered={filtered} />
      ) : (
        <div>Too many matches, specify another filter</div>
      )}
      {filtered.length === 1 && <Country filtered={filtered[0]} />}
    </div>
  );
}

export default App;
