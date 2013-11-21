var five = require('johnny-five');
var board, motion, servo;

board = new five.Board();

board.on('ready', function() {
  motion = new five.IR.Motion(7);
  servo = new five.Servo(10);

  this.repl.inject({
    servo: servo,
    motion: motion
  });

  motion.on('calibrated', function(err, ts) {
    console.log('calibrated', ts);
    servo.center();
  });

  motion.on('motionstart', function(err, ts) {
    console.log('motionstart', ts);
    servo.max();
  });

  motion.on('motionend', function(err, ts) {
    console.log('motionend', ts);
    servo.min();
  });
});
