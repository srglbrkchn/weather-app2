require("dotenv").config();

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = process.env.API_KEY;

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

async function getWeatherData(city) {}
