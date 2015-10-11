var config = require('./config'),
    dash_button = require('node-dash-button'),
    sound = require("mac-sounds");

var mac_sounds = [
  "basso",
  "blow",
  "bottle",
  "frog",
  "funk",
  "glass",
  "hero",
  "morse",
  "ping",
  "pop",
  "purr",
  "sosumi",
  "submarine",
  "tink"
];

var dash = dash_button(config.dash.address); //address from step above
dash.on("detected", function (){
  var d = new Date();
  console.log("Button press detected: " + d);
  var random_sound = mac_sounds[Math.floor(Math.random() * mac_sounds.length)];
  sound(random_sound);
});
