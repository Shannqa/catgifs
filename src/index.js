import config from "../config";
import "./style.css";

const body = document.querySelector("body");
const div = document.createElement("div");
const img = document.createElement("img");
const divError = document.createElement("div");
const btnNew = document.createElement("button");
btnNew.textContent = "More cats";

div.classList.add("main");
div.appendChild(btnNew);
div.appendChild(img);
div.appendChild(divError);
body.appendChild(div);

// giphy api key
const apiKey = config.API_KEY;

function fetchGifs() {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=cats`, {
    mode: "cors",
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`Something went wrong! Status: ${response.status}`);
      }
      console.log(response);
      return response.json();
    })
    .then((response) => {
      divError.textContent = "";
      // console.log(response);
      img.src = response.data.images.downsized.url;
    })
    .catch((err) => {
      divError.textContent =
        "Something went wrong! Sorry, no kitties this time!";
      console.log(err);
    });
}

btnNew.addEventListener("click", () => fetchGifs());

fetchGifs();
