var Leap = require('leapjs').Leap;
var five = require('johnny-five');
var board, servoBase, servoShoulder, servoElbow;
var handPosition;
var moveShoulder;
var moveElbow;
var frames = [];

var controller = new Leap.Controller();
controller.on('frame', function(frame) {
  if(frame.hands.length > 0) {
    handPosition = frame.hands[0].sphereCenter;
    moveShoulder = Math.abs(handPosition[1]/4);
    moveElbow = Math.abs(handPosition[2]/1.5);
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
  servoShoulder = new five.Servo(9);
  servoElbow = new five.Servo(10);

  //servoShoulder.on('move', function(err, degrees) {
  //  console.log('Move: ', degrees);
  //});
  //servoElbow.on('move', function(err, degrees) {
  //  console.log('Move: ', degrees);
  //}); 

  this.loop(40, function() {
    //if(moveServo > 0 || moveServo < 135) {
      servoShoulder.move(moveShoulder);
      servoElbow.move(moveElbow);
      console.log("Shoulder moved to: " + moveShoulder + " | Elbow moved to: " + moveElbow);
      //console.log("Elbow moved to " + moveElbow);  
    //}
  });
});

