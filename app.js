/**
 * Created by david on 2/1/17.
 */

//your on 006 Promises

"use strict";
var aqi = require('./aqi');
var location = require('./location');

// setup yargs to have a -- location or -l argument

var argv = require('yargs')
    .options({
        'lat': {
            demand: false,
            alias: 'x',
            desc: "Request AQI at this latitude.",
            type: 'string'
        },
        'long': {
            demand: false,
            alias: 'y',
            desc: "Request AQI at this longitute.",
            type: 'string'
        }
    })
    .help('help')
    .argv;

if (
    typeof argv.lat === 'string' &&
    typeof argv.long === 'string' &&
    argv.lat <= 90 &&
    argv.long <= 180 &&
    argv.lat >= 0 &&
    argv.long >= 0
) {
    //for now i'm going to limit lat/long to positive numbers only.  Will need to fix for yargs later

    var userLocation = { loc: `${argv.x},${argv.y}` };
    aqi(userLocation).then(function (currentAQI) {
        console.log(currentAQI);
    }).catch(function (error) {
        console.log(error);
    });

    //this catch clause above should print out the reject messages in aqi.js

} else {
    console.log('No proper location given');
    location().then(function (results) {
        return aqi(results);
    }).then(function (aqiResults) {
        console.log(aqiResults);
    }).catch(function (error) {
        console.log(error);
    });

    //this catch clause above should print out the reject messages in location.js
}
