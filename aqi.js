/**
 * Created by david on 2/2/17.
 */
var request = require('request');



module.exports = function (lat, long, callback) {

    var encodedLat = encodeURIComponent(lat);
    var encodedLong = encodeURIComponent(long);

    var url = `https://api.waqi.info/feed/geo:${encodedLat};${encodedLong}/?token=4dbb59849ccb7abaa698c6d5f5995abe3c6c5509`;



    request({
        url: url,
        json: true
    }, function (err, res, body) {
        if (err) {
            callback('Unable to fetch air quality.');
        } else {
            // console.log(JSON.stringify(body, null, 4));
            callback(`AQI for ${body.data.city.name}: ${body.data.iaqi.pm25.v}`);
        }
    });
};