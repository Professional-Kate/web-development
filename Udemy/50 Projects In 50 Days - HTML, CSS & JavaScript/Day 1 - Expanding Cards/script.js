// hiding the API key
import { API_KEY } from "./API_KEY.js";

// fetching from the NASA api
const fetchImages = function () {
  fetch(`https://api.nasa.gov/planetary/apod?count=5&api_key=${API_KEY}`)
    .then((response) => {
      console.log("NASA's API was called");
      return response.json();
    })
    .then((data) =>
      data.forEach((index) =>
        createPanels({ imageURL: index.url, title: index.title })
      )
    )
    .catch((error) => console.log(error));
};

// remove the active class onClick event
const removeActiveClass = (panels) =>
  panels.forEach((panel) => panel.classList.remove("active"));

// adding a click event to each of the panel div's
const panelClickEvent = function () {
  const panels = document.querySelectorAll(".panel"); // return a NodeList of all the panels

  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      removeActiveClass(panels);
      panel.classList.add("active");
    });
  });
};

// function called by the fetch to construct the elements and add them to the DOM
const createPanels = function ({ imageURL, title }) {
  // making elements and adding them to the DOM
  const parentContainer = document.querySelector("#main-content");
  const newDiv = parentContainer.appendChild(document.createElement("div"));
  const newHeader = newDiv.appendChild(document.createElement("h2"));

  // adding the panel class to our new div
  newDiv.classList.add("panel");

  // setting the background-image property to be that of the NASA URL
  newDiv.style.backgroundImage = `url(
    "${imageURL}"
  )`;
  // setting the header text to be that of the NASA title
  newHeader.innerText = title;

  panelClickEvent();
};

window.onload = () => fetchImages();
