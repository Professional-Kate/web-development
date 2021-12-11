import BabyName from "./BabyName.js";
import BabySearch from "./BabySearch.js";

var DisplayNames = function DisplayNames(_ref) {
  var data = _ref.data;

  // onChange event for the search bar which handles hiding and showing the baby cards
  var handleOnChange = function handleOnChange(event) {
    var babyCards = document.querySelectorAll("#baby-cards li"); // get every li child of the container element
    var searchValue = event.target.value.toLowerCase();
    // hides the cards based on the search bars value
    babyCards.forEach(function (card) {
      return card.innerText.toLowerCase().includes(searchValue) ? card.style = "" : card.style = "display: none";
    });
  };

  return React.createElement(
    "div",
    { id: "all-names" },
    React.createElement(BabySearch, { changeEvent: handleOnChange }),
    React.createElement(
      "ul",
      { id: "baby-cards" },
      data.sort(function (one, two) {
        return one.name > two.name ? 1 : -1;
      }).map(function (baby) {
        return React.createElement(BabyName, { key: baby.id, baby: baby });
      })
    )
  );
};

export default DisplayNames;