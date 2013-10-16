#!/usr/bin/env node

// process = require('process')
chalk = require('chalk')

var i = 0;  // dots counter
setInterval(function() {
  process.stdout.clearLine();  // clear current text
  process.stdout.cursorTo(0);  // move cursor to beginning of line
  i = (i + 1) % 4;
  var dots = new Array(i + 1).join(".");
  process.stdout.write("Waiting" + dots);  // write text
}, 300);

