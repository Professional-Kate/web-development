import { babyNames } from "../data/babyNames.js"; // import the data from the provided file
import DisplayNames from "./DisplayNames.js";

const App = () => {
  return (
    <div id="main-content-container">
      <DisplayNames data={babyNames} />
    </div>
  );
};

// renders react
ReactDOM.render(<App />, document.getElementById("baby-names-container"));
