var BabyName = function BabyName(_ref) {
  var baby = _ref.baby;

  return React.createElement(
    "li",
    { id: baby.id + "-" + baby.name },
    baby.name
  );
};

export default BabyName;