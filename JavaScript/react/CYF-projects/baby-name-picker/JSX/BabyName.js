const BabyName = ({ baby }) => {
  return <li id={baby.id + "-" + baby.name}>{baby.name}</li>;
};

export default BabyName;
