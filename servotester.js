var five = require('johnny-five');
var boardOptions = { port: '/dev/cu.usbmodemfa131' };

var board = new five.Board();
board.on('ready', function() {
	var p3 = new five.Servo(3);
	var p9 = new five.Servo(9);
	var p10 = new five.Servo(10);
	var p6 = new five.Servo(6);

	board.repl.inject({
		p3: p3,
		p9: p9,
		p10: p10,
		p6: p6
	});
});
