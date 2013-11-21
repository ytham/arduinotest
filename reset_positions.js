var five = require('johnny-five');

board = new five.Board();
board.on('ready', function() {
  servoBase = new five.Servo(3);
  servoShoulder = new five.Servo(9);
  servoElbow = new five.Servo(10); 
  //servoClaw = new five.Servo(13);

  // Initial positions of the robot arm
  servoBase.center();
  servoShoulder.center();
  servoElbow.center();
  //servoClaw.max();
});