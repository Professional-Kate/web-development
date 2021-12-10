import { babyNames } from "../data/babyNames.js"; // import the data from the provided file
import DisplayNames from "./DisplayNames.js";

var App = function App() {
  return React.createElement(
    "div",
    { id: "main-content-container" },
    React.createElement(DisplayNames, { data: babyNames })
  );
};

// renders react
ReactDOM.render(React.createElement(App, null), document.getElementById("main"));