const CountryList = ({ filtered }) => {
  return (
    <div>
      {filtered.length !== 1 &&
        filtered.map((country) => (
          <div key={country.name.common}>{country.name.common}</div>
        ))}
    </div>
  );
};
export default CountryList;
