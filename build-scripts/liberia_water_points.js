"use strict"

var fs = require('fs');
var csv2geojson = require('csv2geojson');

// read csv file as string 
fs.readFile('../project-files/liberia-flow-data.csv', 'utf-8', (err, csvString) => {
  if (err) throw err

  // convert csv to GeoJSON
  csv2geojson.csv2geojson(csvString, {

    latfield: Number('lat_deg'),
    lonfield: Number('lon_deg'),
    delimiter: ','
  }, function (err, data) {
    if (err) throw err;

    console.log(data)
    
    break; 

    // write the file 
    fs.writeFile('../data/liberia_water.json', JSON.stringify(geojson), 'utf-8', (err) => {
      if (err) throw err;

      console.log('done writing file!')
    })
  })
})