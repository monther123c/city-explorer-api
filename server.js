"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();
const axios = require("axios");
let getWetherHandler = require("./assestent_js_files/weather");
let getMovieHandler =require("./assestent_js_files/movies");
server.use(cors());

const PORT = process.env.PORT || 3001; // make the server opened for any request

// http://localhost:3001/
server.get("/", (req, res) => {
  res.send("Hi from the home roure");
});

// http://localhost:3001/test
server.get("/test", (req, res) => {
  res.send("Hi from the home 'test' roure");
});


server.get("/getWether", getWetherHandler);


server.get("/getMovie", getMovieHandler);


server.get("*", (req, res) => {


  res.send("page not found");
});




server.listen(PORT, () => {
  console.log(`Hello, I am listening on ${PORT}`);
});