const BabyName = ({ baby, onClickEvent, shouldHide }) => {
  return (
    <li
      onClick={onClickEvent}
      id={baby.id}
      className={`baby-list-item card text-black ${
        baby.sex === "m" ? "baby-blue" : "baby-pink"
      } ${shouldHide ? "hidden" : ""}`}
    >
      {baby.name}
    </li>
  );
};

export default BabyName;
