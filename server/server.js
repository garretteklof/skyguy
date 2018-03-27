const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

const publicPath = path.join(__dirname, "..", "public");

require("./config/config");
const port = process.env.PORT;

app.use(express.static(publicPath));
app.use(bodyParser.json());

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.post("/api", async (req, res) => {
  const { address } = req.body;
  const encodedAddress = encodeURIComponent(address);
  try {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${
      process.env.GOOGLE_MAPS_API_KEY
    }`;
    const geocodeResponse = await axios.get(geocodeUrl);
    const lat = geocodeResponse.data.results[0].geometry.location.lat;
    const lng = geocodeResponse.data.results[0].geometry.location.lng;
    const weatherUrl = `https://api.darksky.net/forecast/${
      process.env.DARKSKY_API_KEY
    }/${lat},${lng}`;
    const formattedAddress = geocodeResponse.data.results[0].formatted_address;
    const weatherResponse = await axios.get(weatherUrl);
    const data = Object.assign({}, weatherResponse.data, { formattedAddress });
    res.send(data);
  } catch (e) {
    if (e.code === "ENOTFOUND") {
      res.status(500).send();
    } else {
      res.status(400).send();
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
