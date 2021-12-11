var BabySearch = function BabySearch(_ref) {
  var changeEvent = _ref.changeEvent;

  return React.createElement(
    "form",
    { id: "baby-search-container", className: "baby-search-container" },
    React.createElement(
      "label",
      { htmlFor: "baby-name-search" },
      "Search:"
    ),
    React.createElement("input", {
      id: "baby-name-search",
      type: "search",
      placeholder: "Name",
      onChange: changeEvent
    })
  );
};

export default BabySearch;