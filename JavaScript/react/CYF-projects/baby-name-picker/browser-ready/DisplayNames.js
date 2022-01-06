import React, { useState } from "react";
import BabyName from "./BabyName.js";
import BabySearch from "./BabySearch.js";
import { favouriteNames } from "../data/favouriteNames.js";

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

  // function for favoriting baby names
  var handleOnClick = function handleOnClick(event) {
    var clickedCardID = parseInt(event.target.id); // id is a string, we need int
    var fountIndex = data.findIndex(function (baby) {
      return clickedCardID === baby.id;
    });

    data.splice(fountIndex, 1);

    // favouriteNames.push(fountObject);
    console.log(fountIndex);
  };

  return React.createElement(
    "div",
    { id: "names-container" },
    React.createElement(
      "div",
      { id: "favourite-names" },
      favouriteNames.map(function (baby) {
        return React.createElement(BabyName, { key: baby.id, baby: baby });
      })
    ),
    React.createElement(BabySearch, { changeEvent: handleOnChange }),
    React.createElement(
      "ul",
      { id: "baby-cards" },
      data.sort(function (one, two) {
        return one.name > two.name ? 1 : -1;
      }).map(function (baby) {
        return React.createElement(BabyName, { key: baby.id, baby: baby, onClickEvent: handleOnClick });
      })
    )
  );
};

export default DisplayNames;