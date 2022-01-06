import React, { useState } from "react";
import BabyName from "./BabyName.js";
import BabySearch from "./BabySearch.js";
import { favouriteNames } from "../data/favouriteNames.js";

const DisplayNames = ({ data }) => {
  // onChange event for the search bar which handles hiding and showing the baby cards
  const handleOnChange = function (event) {
    const babyCards = document.querySelectorAll("#baby-cards li"); // get every li child of the container element
    const searchValue = event.target.value.toLowerCase();
    // hides the cards based on the search bars value
    babyCards.forEach((card) =>
      card.innerText.toLowerCase().includes(searchValue)
        ? (card.style = "")
        : (card.style = "display: none")
    );
  };

  // function for favoriting baby names
  const handleOnClick = function (event) {
    const clickedCardID = parseInt(event.target.id); // id is a string, we need int
    const fountIndex = data.findIndex((baby) => clickedCardID === baby.id);

    data.splice(fountIndex, 1);

    // favouriteNames.push(fountObject);
    console.log(fountIndex);
  };

  return (
    <div id="names-container">
      <div id="favourite-names">
        {favouriteNames.map((baby) => (
          <BabyName key={baby.id} baby={baby} />
        ))}
      </div>
      <BabySearch changeEvent={handleOnChange} />
      <ul id="baby-cards">
        {/* sorts the data based on the babies name */}
        {data
          .sort((one, two) => (one.name > two.name ? 1 : -1))
          .map((baby) => (
            <BabyName key={baby.id} baby={baby} onClickEvent={handleOnClick} />
          ))}
      </ul>
    </div>
  );
};

export default DisplayNames;
