const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url =
      "http://api.weatherstack.com/forecast?access_key=5bd618587c59bd1ea11aa5540bef2fe5&query=" +
      latitude +
      "," +
      longitude;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, "It is currently " + body.current.temperature + " degree Celcius.")
        }
    })
}

module.exports = forecast