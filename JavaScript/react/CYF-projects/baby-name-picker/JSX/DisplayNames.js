import BabyName from "./BabyName.js";

const DisplayNames = ({ data }) => {
  return (
    <div id="all-names">
      <ul>
        {data.map((baby) => (
          <BabyName key={baby.id} baby={baby} />
        ))}
      </ul>
    </div>
  );
};

export default DisplayNames;
