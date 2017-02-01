/**
 * Created by david on 2/1/17.
 */
'use strict';

var request = require('request');

var url = 'https://api.waqi.info/search/?token=4dbb59849ccb7abaa698c6d5f5995abe3c6c5509&keyword=Dali%2C+Taiwan';

request({
    url: url,
    json: true
}, function (err, res, body) {
    if (err) {
        console.log('Unable to fetch air quality.');
    } else {
        console.log(JSON.stringify(body, null, 4));
        console.log(`API for ${body.data[0].station.name}: ${body.data[0].aqi}`);
    }
});