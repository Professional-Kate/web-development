import { useState } from "react";
import BabyName from "./BabyNames";
import { favouriteNames } from "../data/favouriteNames";
import GenderSort from "./GenderSort";

const DisplayNames = ({ data }) => {
  const [babyData, setBabyData] = useState(data);
  const [favouriteNamesData, SetFavouriteNamesData] = useState(favouriteNames);
  const [genderToHide, setGenderToHide] = useState("none");

  // function for favoriting baby names
  const favouriteName = function (event) {
    const clickedCardID = parseInt(event.target.id); // id is a string, we need int
    const returnedElement = babyData.filter(
      (baby) => clickedCardID === baby.id
    )[0]; // not sure why but this won't work without that [0] specifier

    setBabyData(
      (babyData) =>
        (babyData = babyData.filter((baby) => baby.id !== returnedElement.id))
    );

    SetFavouriteNamesData((favouriteNamesData) => [
      ...favouriteNamesData,
      returnedElement,
    ]); // spread the old data and add in the clicked element after that spread data
  };

  const sortNamesOnGender = (event) => {
    setGenderToHide(event.target.value);
  };

  return (
    <div id="names-container">
      <GenderSort handleOnChange={sortNamesOnGender} />
      <div className={"favourite-names"}>
        <h2 className={"favourite-names-header"}>Your Favourite Names</h2>
        <ul id="favourite-names">
          {favouriteNamesData.map((baby) => (
            <BabyName key={baby.id} baby={baby} />
          ))}
        </ul>
      </div>
      <ul id="baby-cards">
        {/* sorts the data based on the babies name */}
        {babyData
          .sort((one, two) => (one.name > two.name ? 1 : -1))
          .map((baby) => (
            <BabyName
              key={baby.id}
              baby={baby}
              onClickEvent={favouriteName}
              shouldHide={
                genderToHide === "both" ? false : baby.sex === genderToHide
              }
            />
          ))}
      </ul>
    </div>
  );
};

export default DisplayNames;
