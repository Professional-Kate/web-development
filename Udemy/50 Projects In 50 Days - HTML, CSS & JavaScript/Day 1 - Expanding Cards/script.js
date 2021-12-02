const removeActiveClasses = (panels) =>
  panels.forEach((panel) => panel.classList.remove("active"));

const expandingPanels = function () {
  const panels = document.querySelectorAll(".panel"); // return a NodeList of all the panels

  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      removeActiveClasses(panels);
      panel.classList.add("active");
    });
  });
};

window.onload = () => expandingPanels();
