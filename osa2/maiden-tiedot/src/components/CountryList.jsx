const CountryList = ({ filtered, handleClick }) => {
  const countryElement = filtered.map((country) => (
    <div className="list" key={country.name.common}>
      <div className="country-name">{country.name.common}</div>
      <button onClick={() => handleClick([country])}>show</button>
    </div>
  ));

  return <div>{filtered.length !== 1 && countryElement}</div>;
};

export default CountryList;
