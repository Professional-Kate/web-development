import BabyName from "./BabyName.js";

const DisplayNames = ({ data }) => {
  return (
    <div id="all-names">
      <ul>
        {data.forEach(function (baby) {
          return <h2>hello</h2>;
        })}
      </ul>
    </div>
  );
};

export default DisplayNames;
