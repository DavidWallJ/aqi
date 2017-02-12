/**
 * Created by david on 2/2/17.
 */
var request = require('request');
var url = 'http://ipinfo.io';

module.exports = function () {

    return new Promise(function (resolve, reject) {
        request({
            url: url,
            json: true
        }, function (err, res, body) {
            if (err) {
                reject('Unable to guess location.');
            } else {
                // console.log(`From location file: ${JSON.stringify(body, null, 4)}`);
                resolve(body);
            }
        });
    });
};

