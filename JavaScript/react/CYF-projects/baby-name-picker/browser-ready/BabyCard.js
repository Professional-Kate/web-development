var BabyCard = function BabyCard(_ref) {
  var onClickEvent = _ref.onClickEvent;

  return React.createElement(
    "li",
    {
      onClick: onClickEvent,
      id: baby.id + "-" + baby.name,
      className: "baby-list-item card text-black " + (baby.sex === "m" ? "baby-blue" : "baby-pink")
    },
    baby.name
  );
};

export default BabyCard();