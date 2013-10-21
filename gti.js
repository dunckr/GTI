#!/usr/bin/env node

var counter = 0;
var width = process.stdout.columns;

setInterval(function () {
  clear();
  drawCar(counter);
  counter++;
  if (counter > width + 2) {
    process.exit(1);
  }
}, 100);

function drawCar(x) {
  lineAt(x, "   ,---------------.");
  lineAt(x, "  /  /``````|``````\\\\");
  lineAt(x, " /  /_______|_______\\\\________");
  lineAt(x, "|]      GTI |'       |        |]");
  if (x % 2) {
    lineAt(x, "=  .-:-.    |________|  .-:-.  =");
    lineAt(x, " `  -+-  --------------  -+-  '");
    lineAt(x, "   '-:-'                '-:-' ");
  } else {
    lineAt(x, "=  .:-:.    |________|  .:-:.  =");
    lineAt(x, " `   X   --------------   X   '");
    lineAt(x, "   ':-:'                ':-:'  ");
  }
}

function lineAt(x, str) {
  var blank = Array(x).join(' ');
  output = blank + str;
  process.stdout.write(output.slice(0, width) + '\n');
}

function clear() {
  process.stdout.write('\u001B[0;0f');
}
