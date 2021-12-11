import BabyName from "./BabyName.js";
import BabySearch from "./BabySearch.js";

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

  return (
    <div id="all-names">
      <BabySearch changeEvent={handleOnChange} />
      <ul id="baby-cards">
        {/* sorts the data based on the babies name */}
        {data
          .sort((one, two) => (one.name > two.name ? 1 : -1))
          .map((baby) => (
            <BabyName key={baby.id} baby={baby} />
          ))}
      </ul>
    </div>
  );
};

export default DisplayNames;
