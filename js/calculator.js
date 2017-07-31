function Calculator(skinName) {
  this.skin = skinName;
  // addition = function(one, two) {
  //   return one + two;
  // }
}

Calculator.prototype.addition = function(one, two) {
  return one + two;
};

Calculator.prototype.subtraction = function(one, two) {
  return one - two;
};

Calculator.prototype.multiplication = function(one, two) {
  return one * two;
};

Calculator.prototype.division = function(one, two) {
  return one / two;
};

exports.calculatorModule = Calculator;
