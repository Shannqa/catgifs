import config from "../config";

const body = document.querySelector("body");
const img = document.createElement("img");
// giphy api key
const apiKey = config.API_KEY;

fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=cats`, {
  mode: "cors",
})
  .then((response) => response.json())
  .then((response) => {
    img.src = response.data.images.original.url;
  })
  .catch((err) => {
    console.log(err);
  });

body.appendChild(img);
