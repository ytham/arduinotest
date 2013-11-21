var five = require('johnny-five');
var board, servo;

board = new five.Board();

board.on('ready', function() {
  servo = new five.Servo(10);
  board.repl.inject({
    servo: servo
  });

  servo.min();

  servo.on('move', function(err, degrees) {
    console.log('move', degrees);
  });
});
