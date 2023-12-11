const Filter = ({ filterTerm, setFilterTerm }) => (
  <div className="flex">
    <label>find: </label>
    <input value={filterTerm} onChange={(e) => setFilterTerm(e.target.value)} />
  </div>
);

export default Filter;
