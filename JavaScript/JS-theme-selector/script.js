const getRoot = document.documentElement; //attach to the root element, where out variables are stored
const getButtons = document.querySelectorAll("#button-container > button"); //attach to the buttons

const toggleTheme = function (currentTheme) {
  switch (currentTheme.target.value) {
    case "bright":
      getRoot.style.setProperty("--main-background-color", "#fff");
      getRoot.style.setProperty("--main-text-color", "hsl(201, 20%, 25%)");
      break;
    case "dark":
      getRoot.style.setProperty(
        "--main-background-color",
        "hsl(201, 20%, 25%)"
      );
      getRoot.style.setProperty("--main-text-color", "#fff");
      break;
  }
};

getButtons.forEach((button) => {
  button.addEventListener("click", toggleTheme);
  // attaches an onClick() event onto each button because it is in the foreach. When it attaches it it can run some code, in this case the function toggleTheme. It's basically adding = onClick("toggleTheme()"). The currentTheme parameter in the function is equal to the value parameter in the clicked button
});
