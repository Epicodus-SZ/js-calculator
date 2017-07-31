(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "a6ee864aa8d0ccce38a1fef0ceeff11e";

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

Weather = function(){
};

Weather.prototype.getWeather = function(city, displayHumidity) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayHumidity(city, response.main.humidity);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
};

exports.weatherModule = Weather;

},{"./../.env":1}],4:[function(require,module,exports){
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

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

// Steve was here.

$(document).ready(function(){
  $('#time').text(moment());
});

var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});

},{"./../js/calculator.js":2,"./../js/weather.js":3}]},{},[4]);
