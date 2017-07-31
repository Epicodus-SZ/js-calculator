var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function() {
  $('#calc-form').submit(function(event) {
    event.preventDefault();
    var input1 = parseInt($('#one').val(), 10);
    var input2 = parseInt($('#two').val(), 10);
    var simpleCalculator = new Calculator("hot pink");
    var addOutput = simpleCalculator.addition(input1, input2);
    $('#solution').append("adding = " + addOutput + "<br>");
    var minusOutput = simpleCalculator.subtraction(input1, input2);
    $('#solution').append("subtracting = " + minusOutput + "<br>");
    var multiplyOutput = simpleCalculator.multiplication(input1, input2);
    $('#solution').append("multiplying = " + multiplyOutput + "<br>");
    var divideOutput = simpleCalculator.division(input1, input2);
    $('#solution').append("dividing = " + divideOutput + "<br>");
  });
});
