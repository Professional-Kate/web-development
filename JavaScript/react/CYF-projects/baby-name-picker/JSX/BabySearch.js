const BabySearch = ({ changeEvent }) => {
  return (
    <form id="baby-search-container" className="baby-search-container">
      <label htmlFor="baby-name-search">Search:</label>
      <input
        id="baby-name-search"
        type="search"
        placeholder="Name"
        onChange={changeEvent}
      />
    </form>
  );
};

export default BabySearch;
