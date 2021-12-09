import Testing from "./components/Testing.js";

class App extends React.Component {
  render() {
    return React.createElement(Testing, null);
  }
}

// renders react
ReactDOM.render(
  React.createElement(App, null),
  document.getElementById("main")
);
