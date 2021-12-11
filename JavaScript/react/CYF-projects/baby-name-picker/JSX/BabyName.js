const BabyName = ({ baby }) => {
  return (
    <li
      id={baby.id + "-" + baby.name}
      className={`baby-list-item card text-black ${
        baby.sex === "m" ? "baby-blue" : "baby-pink"
      }`}
    >
      {baby.name}
    </li>
  );
};

export default BabyName;
