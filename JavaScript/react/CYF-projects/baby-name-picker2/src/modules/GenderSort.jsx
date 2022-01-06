const GenderSort = ({ handleOnChange }) => {
  return (
    <div>
      <h2>Sort names by gender</h2>
      <form id="gender-sort-form" onChange={handleOnChange}>
        <label htmlFor="radio-both-sort">Both</label>
        <input
          id="radio-both-sort"
          type="radio"
          name="gender-selector"
          value="both"
          defaultChecked
        ></input>
        <label htmlFor="radio-male-sort">Male</label>
        <input
          id="radio-male-sort"
          type="radio"
          name="gender-selector"
          value="m"
        ></input>
        <label htmlFor="radio-female-sort">Female</label>
        <input
          id="radio-female-sort"
          type="radio"
          name="gender-selector"
          value="f"
        ></input>
      </form>
    </div>
  );
};

export default GenderSort;
