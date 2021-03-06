var BabyName = function BabyName(_ref) {
  var baby = _ref.baby,
      onClickEvent = _ref.onClickEvent;

  return React.createElement(
    "li",
    {
      onClick: onClickEvent,
      id: baby.id,
      className: "baby-list-item card text-black " + (baby.sex === "m" ? "baby-blue" : "baby-pink")
    },
    baby.name
  );
};

export default BabyName;