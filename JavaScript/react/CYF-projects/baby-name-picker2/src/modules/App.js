import { babyNames } from "../data/babyNames"; // import the data from the provided file
import DisplayNames from "./DisplayNames";
import BabySearch from "./BabySearch";

const App = () => {
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

  return (
    <div id="main-content-container">
      <BabySearch changeEvent={handleOnChange} />
      <DisplayNames data={babyNames} />
    </div>
  );
};

export default App;
