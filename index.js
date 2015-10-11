var dash_button = require('node-dash-button');

var dash = dash_button("74:c2:46:ad:f5:b7"); //address from step above
dash.on("detected", function (){
  var d = new Date();
  console.log("Button press detected: " + d);
});
