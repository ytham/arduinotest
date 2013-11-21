var Leap = require('leapjs').Leap;
var five = require('johnny-five');
var board, servo;
var handPosition;
var frames = [];

var controller = new Leap.Controller();
controller.on('frame', function(frame) {
  if(frame.hands.length > 0) {
    handPosition = frame.hands[0].sphereCenter;
    console.log(handPosition[1]);
  }
  frames.push(frame);
});

controller.on('connect', function(frame) {
  console.log("Leap Connected.");
  setTimeout(function() { 
    var time = frames.length/2;
  }, 200);
});

controller.connect();

board = new five.Board();
board.on('ready', function() {
  servo = new five.Servo(10);

  servo.on('move', function(err, degrees) {
    console.log('Move: ', degrees);
  });

  this.loop(50, function() {
    servo.move(handPosition[1]);
    console.log("Servo moved to " + handPosition[1]);  
  });
});

function moveServo() {
 moveServo();
} 


