import BabyName from "./BabyName.js";

var DisplayNames = function DisplayNames(_ref) {
  var data = _ref.data;

  return React.createElement(
    "div",
    { id: "all-names" },
    React.createElement(
      "ul",
      null,
      data.forEach(function (baby) {
        return React.createElement(
          "h2",
          null,
          "hello"
        );
      })
    )
  );
};

export default DisplayNames;