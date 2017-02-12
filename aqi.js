/**
 * Created by david on 2/2/17.
 */
var request = require('request');



module.exports = function (locationObject) {
    return new Promise(function(resolve, reject){

        var str = locationObject.loc;
        var res = str.split(",");
        var lat = res[0];
        var long = res[1];

        var encodedLat = encodeURIComponent(lat);
        var encodedLong = encodeURIComponent(long);

        var url = `https://api.waqi.info/feed/geo:${encodedLat};${encodedLong}/?token=4dbb59849ccb7abaa698c6d5f5995abe3c6c5509`;

        if (!lat || !long) {
            reject('No location provided');
        }

        request({
            url: url,
            json: true
        }, function (err, res, body) {
            if (err) {
                reject('Unable to fetch air quality.');
            } else {
                // console.log(JSON.stringify(body, null, 4));
                resolve(`AQI for ${body.data.city.name}: ${body.data.iaqi.pm25.v}`);
            }
        });
    });
};