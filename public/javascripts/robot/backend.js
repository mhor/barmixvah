var board, pump0, pump1, pump2, pump3, pump4, pump5, pump6, pump7, pump8, pump9, pump10, pump11, pump12, pump13, pump14, pump15, pump16;

var five = require('johnny-five');

board = new five.Board();
board.on('ready', function () {
  // Counting down pins because that's the orientation
  // that my Arduino happens to be in
  pump0 = new five.Led("A0");
  pump1 = new five.Led("A1");
  pump2 = new five.Led("A2");
  pump3 = new five.Led("A3");
  pump4 = new five.Led("A4");
  pump5 = new five.Led("A5");
  pump6 = new five.Led("2");
  pump7 = new five.Led("3");
  pump8 = new five.Led("4");
  pump9 = new five.Led("5");
  pump10 = new five.Led("6");
  pump11 = new five.Led("7");
  pump12 = new five.Led("8");
  pump13 = new five.Led("9");
  pump14 = new five.Led("10");
  pump15 = new five.Led("11");
  pump16 = new five.Led("12");

  board.repl.inject({
    p0: pump0,
    p1: pump1,
    p2: pump2,
    p3: pump3,
    p4: pump4,
    p5: pump5,
    p6: pump6
  });

  console.log("\033[31m[MSG] Bar Mixvah Ready\033[91m");
});

exports.pump = function (ingredients) {
  console.log("Dispensing Drink");
  for (var i in ingredients) {
    (function (i) {
      setTimeout(function () {  // Delay implemented to have a top-biased mix
        pumpMilliseconds(ingredients[i].pump, ingredients[i].amount);
      }, ingredients[i].delay);
    })(i);
  }
};

function pumpMilliseconds(pump, ms) {
  exports.startPump(pump);
  setTimeout(function () {
    exports.stopPump(pump);
  }, ms);
}

exports.startPump = function (pump) {
  console.log("\033[32m[PUMP] Starting " + pump + "\033[91m");
  var p = exports.usePump(pump);
  p.on();
}

exports.stopPump = function (pump) {
  console.log("\033[32m[PUMP] Stopping " + pump + "\033[91m");
  var p = exports.usePump(pump);
  p.off();
}

exports.usePump = function (pump) {
  var using;
  switch(pump) {
    case 'pump0':
      using = pump0;
      break;
    case 'pump1':
      using = pump1;
      break;
    case 'pump2':
      using = pump2;
      break;
    case 'pump3':
      using = pump3;
      break;
    case 'pump4':
      using = pump4;
      break;
    case 'pump5':
      using = pump5;
      break;
    case 'pump6':
      using = pump6;
      break;
    case 'pump7':
      using = pump7;
      break;
    case 'pump8':
      using = pump8;
      break;
    case 'pump9':
      using = pump9;
      break;
    case 'pump10':
      using = pump10;
      break;
    case 'pump11':
      using = pump11;
      break;
    case 'pump12':
      using = pump12;
      break;
    case 'pump13':
      using = pump13;
      break;
    case 'pump14':
      using = pump14;
      break;
    case 'pump15':
      using = pump15;
      break;
    case 'pump16':
      using = pump16;
      break;
    default:
      using = null;
      break;
  }
  return using;
}
