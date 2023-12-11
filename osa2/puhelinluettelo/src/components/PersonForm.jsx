const PersonForm = ({
  handleSubmit,
  setNewName,
  setNewNumber,
  newName,
  newNumber,
}) => (
  <form onSubmit={handleSubmit}>
    <div className="flex">
      <label>name:</label>
      <input value={newName} onChange={(e) => setNewName(e.target.value)} />
    </div>
    <div className="flex">
      <label>number:</label>
      <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

export default PersonForm;
