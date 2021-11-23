const fs = require("fs");
const turf = require("@turf/turf")
const chalk = require("chalk");

fs.readFile(__dirname + "/../data/clean_data/liberia_water.json", "utf-8", (err, data) => {
  if (err) throw err;

  // parse incoming GeoJSON text 
  const water = JSON.parse(data);

  waterInBuffer(water)
})

function waterInBuffer(water) {
  console.log(water)
}