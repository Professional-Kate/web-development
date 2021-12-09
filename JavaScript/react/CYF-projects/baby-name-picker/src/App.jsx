import Testing from "./Testing.js";

const App = () => {
  return (
    <div>
      <Testing />
      <Testing />
      <Testing />
    </div>
  );
};

// renders react
ReactDOM.render(<App />, document.getElementById("main"));
