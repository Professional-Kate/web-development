const BabyName = ({ baby, onClickEvent }) => {
  return (
    <li
      onClick={onClickEvent}
      id={baby.id}
      className={`baby-list-item card text-black ${
        baby.sex === "m" ? "baby-blue" : "baby-pink"
      }`}
    >
      {baby.name}
    </li>
  );
};

export default BabyName;
