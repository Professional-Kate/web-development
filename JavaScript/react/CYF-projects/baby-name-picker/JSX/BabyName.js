const BabyName = ({ baby }) => {
  const [shouldHide, setShouldHide] = React.useState(false);

  return (
    <li
      id={baby.id + "-" + baby.name}
      className={`baby-list-item card text-black ${
        baby.sex === "m" ? "baby-blue" : "baby-pink"
      }`}
      style={shouldHide ? { display: "none" } : {}}
    >
      {baby.name}
    </li>
  );
};

export default BabyName;
