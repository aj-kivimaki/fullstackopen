const Country = ({ filtered }) => {
  return (
    <div>
      <h2>{filtered.name.common}</h2>
      <p>capital {filtered.capital}</p>
      <p>area {filtered.area}</p>

      <h3>languages:</h3>
      <ul>
        {Object.values(filtered.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <div className="flag">{filtered.flag}</div>
    </div>
  );
};
export default Country;
