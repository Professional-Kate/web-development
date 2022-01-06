import { babyNames } from "../data/babyNames"; // import the data from the provided file
import DisplayNames from "./DisplayNames";

const App = () => {
  return (
    <div id="main-content-container">
      <DisplayNames data={babyNames} />
    </div>
  );
};

export default App;
