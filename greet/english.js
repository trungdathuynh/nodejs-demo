var greeting = require("./greetings.json");
var english = function() {
    console.log(greeting.en);
}

module.exports = english;