const Filter = ({ filterTerm, setFilterTerm }) => (
  <div>
    filter shown with{" "}
    <input value={filterTerm} onChange={(e) => setFilterTerm(e.target.value)} />
  </div>
);

export default Filter;
