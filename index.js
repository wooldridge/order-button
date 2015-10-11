var config = require('./config'),
    dash_button = require('node-dash-button'),
    sound = require('mac-sounds'),
    express = require('express');

// Last button press timestamp
var d = null;

// Set up sounds
var mac_sounds = [
  'basso',
  'blow',
  'bottle',
  'frog',
  'funk',
  'glass',
  'hero',
  'morse',
  'ping',
  'pop',
  'purr',
  'sosumi',
  'submarine',
  'tink'
];

// Set up express
var app = express(),
    router = express.Router();

// Serve static files and dependencies
app.use(express.static(__dirname + '/'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// Only requests to /api/ will be sent to router.
app.use('/api', router);

// Listen on port
var server = app.listen(config.server.port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

// GET last button press
router.get('/button/last', function(req, res, next) {
  data = {"last": d};
  res.type('application/json');
  console.log('Sending /button/last data')
  console.dir(data);
  res.json(data);
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
  console.log('connection established');
  // Receive messages from connections here
});

// Handle button presses
var dash = dash_button(config.button.address);
console.log('Script started. Now press the Amazon Dash Button.')
dash.on('detected', function (){
  // Write to console
  d = new Date();
  console.log('Button press detected: ' + d);
  // Play random sound on Mac OS X
  var random_sound = mac_sounds[Math.floor(Math.random() * mac_sounds.length)];
  sound(random_sound);
  // Send message to connections
  var data = {last: d};
  io.sockets.emit('button', data);
});
