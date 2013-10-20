#!/usr/bin/env node

chalk = require('chalk');

var i = 0;  // dots counter


setInterval(function() {
  process.stdout.clearLine();
  process.stdout.cursorTo(i);
  process.stdout.write(drawCar());
  // process.stdout.write('one')
  i++;
}, 100);


function drawCar() {
  return "   ,---------------.\n" +
        "  /  /``````|``````\\\\\n" +
        " /  /_______|_______\\\\________\n" +
        "|]      GTI |'       |        |]\n" +
        "=  .-:-.    |________|  .-:-.  =\n" +
        " `  -+-  --------------  -+-  '\n" +
        "   '-:-'                '-:-' \n ";
}

// line_at(x, "   ,---------------.");
// line_at(x, "  /  /``````|``````\\\\");
// line_at(x, " /  /_______|_______\\\\________");
// line_at(x, "|]      GTI |'       |        |]");
// if (x % 2) {
// line_at(x, "=  .-:-.    |________|  .-:-.  =");
// line_at(x, " `  -+-  --------------  -+-  '");
// line_at(x, "   '-:-'                '-:-'  ");
// } else {
// line_at(x, "=  .:-:.    |________|  .:-:.  =");
// line_at(x, " `   X   --------------   X   '");
// line_at(x, "   ':-:'                ':-:'  ");