import config from "../config";
import "./style.css";
import giphy from "./Poweredby_100px-White_VertText.png";

const body = document.querySelector("body");
const div = document.createElement("div");
const gif = document.createElement("img");
const powered = document.createElement("img");
powered.src = giphy;
const a = document.createElement("a");
a.href = "https://giphy.com/";
const divError = document.createElement("div");
const btnNew = document.createElement("button");
btnNew.textContent = "More cats";

div.classList.add("main");
div.appendChild(btnNew);
div.appendChild(gif);
div.appendChild(divError);
a.appendChild(powered);
div.appendChild(a);
body.appendChild(div);

// giphy api key
const apiKey = config.API_KEY;

async function fetchGifs() {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=cats`,
      {
        mode: "cors",
      },
    );
    if (response.status !== 200) {
      throw new Error(`Something went wrong! Status: ${response.status}`);
    }
    // console.log(response);
    const catData = await response.json();
    // console.log(catData);
    divError.textContent = "";
    gif.src = catData.data.images.downsized.url;
  } catch (err) {
    divError.textContent = "Something went wrong! Sorry, no kitties this time!";
    console.log(err);
  }
}

btnNew.addEventListener("click", () => fetchGifs());

fetchGifs();
