import config from "../config";
import "./style.css";

const body = document.querySelector("body");
const div = document.createElement("div");
const img = document.createElement("img");
const btnNew = document.createElement("button");
btnNew.textContent = "More cats";
div.classList.add("main");
div.appendChild(btnNew);
div.appendChild(img);
body.appendChild(div);

// giphy api key
const apiKey = config.API_KEY;

function fetchGifs() {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=cats`, {
    mode: "cors",
  })
    .then((response) => response.json())
    .then((response) => {
      img.src = response.data.images.downsized.url;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

btnNew.addEventListener("click", () => fetchGifs());

fetchGifs();
