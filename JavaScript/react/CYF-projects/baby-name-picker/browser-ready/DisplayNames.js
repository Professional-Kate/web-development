import BabyName from "./BabyName.js";

var DisplayNames = function DisplayNames(_ref) {
  var data = _ref.data;

  return React.createElement(
    "div",
    { id: "all-names" },
    React.createElement(
      "ul",
      null,
      data.map(function (baby) {
        return React.createElement(BabyName, { key: baby.id, baby: baby });
      })
    )
  );
};

export default DisplayNames;