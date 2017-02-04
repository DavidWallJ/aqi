/**
 * Created by david on 2/1/17.
 */
var aqi = require('./aqi');
var location = require('./location');

// setup yargs to have a -- location or -l argument




aqi(function (currentAQI) {
    console.log(currentAQI);
});

location(function (location) {
    if (!location) {
        console.log('Unable to determine location.');
        return;
    }

    console.log(`City: ${location.city}`);
    var str = location.loc;
    var res = str.split(",");
    console.log(`Lat: ${res[0]}`);
    console.log(`Long: ${res[1]}`);
});

// if location provided
// call weather(location, callback)
// else
//      call location
//             call weather (location, callback)