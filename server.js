import dotenv from "dotenv";
dotenv.config();

import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;

app.use(express.static("public"));

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  try {
    const weatherData = await getWeatherData(city);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch weather data" });
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  console.log("API response:", response.json());

  if (!response.ok) {
    throw new Error("Could not fetch weather data");
  }
  return await response.json();
}

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
