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
    var lat = argv.x;
    var long = argv.y;

    aqi(lat, long, function (currentAQI) {
        console.log(currentAQI);
    });
} else {
    console.log('No proper location given');
    location(function (location) {
        if (!location) {
            console.log('Unable to determine location.');
            return;
        }

        var str = location.loc;
        var res = str.split(",");
        var lat = res[0];
        var long = res[1];

        aqi(lat, long, function (currentAQI) {
            console.log(currentAQI);
        });
    });
}

// } else {}
//
//
// location(function (location) {
//     if (!location) {
//         console.log('Unable to determine location.');
//         return;
//     }
//
//     console.log(`City: ${location.city}`);
//     var str = location.loc;
//     var res = str.split(",");
//     console.log(`Lat: ${res[0]}`);
//     console.log(`Long: ${res[1]}`);
// });

// if location provided
// call weather(location, callback)
// else
//      call location
//             call weather (location, callback)