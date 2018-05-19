<img src="/public/images/skyguy.svg" height='200px' width='200px'/>

# SKYGUY

A basic Node/React weather app built with Google Geocoding API &amp; Dark Sky API.

[View live site](https://skyguy.herokuapp.com/)

## Getting Started

For a local copy, clone the repo and from the command line: `yarn install && yarn run dev-server` (or use npm). You'll also need to run: `yarn start` from a separate command prompt to begin the Express server.

(The UI will come up but there will be no functionality. If you want to run it yourself, create a config.json file in the server/config folder with respective GOOGLE_MAPS_API_KEY and DARK_SKY_API_KEY keys)

### Features

* Up-to-the-second weather for any given location.

## Built With

skyguy is a swift, sleek weather app that utilizes:

* Google's [Geolocation API](https://developers.google.com/maps/documentation/geolocation/intro)
* [Dark Sky API](https://darksky.net/dev)
* Facebook's [React](https://github.com/facebook/react)
* A very simple [Express](https://expressjs.com/) server for hosting on [Heroku](https://www.heroku.com/)
