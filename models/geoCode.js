require('dotenv').config()
var keys = require("../keys.js")

var apiKey = keys.apiKey

URL = "https://maps.googleapis.com/maps/api/geocode/json?"

var location = "11402 Gold Pan Road Charlotte NC"

function getLocation() {
    $.ajax({
        url: URL + location + "&key=" + apiKey,
        method: "GET"
    }).then(function(resposne) {
        console.log(response)
    })
    .catch(function(err) {
        console.log(err)
    })
}

getLocation()