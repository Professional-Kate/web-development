import Testing from "./Testing.js";

var App = function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(Testing, null),
    React.createElement(Testing, null),
    React.createElement(Testing, null)
  );
};

// renders react
ReactDOM.render(React.createElement(App, null), document.getElementById("main"));