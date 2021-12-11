var BabyName = function BabyName(_ref) {
  var baby = _ref.baby;

  return React.createElement(
    "li",
    {
      id: baby.id + "-" + baby.name,
      className: "baby-list-item card text-black " + (baby.sex === "m" ? "baby-blue" : "baby-pink")
    },
    baby.name
  );
};

export default BabyName;