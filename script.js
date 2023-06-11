/* == CALCULATOR FUNCTIONALITIES */

let numbers = [];

const checkInput = function(array) {
  if (isNaN(array[0]) || isNaN(array[1])) return true;
}

const add = function(array) {
  let num1 = array[0];
  let num2 = array[1]
  if (checkInput(num1,num2)) return "ERROR";
  num1 += num2;
  return array
}

const subtract = function(array) {
  let num1 = array[0];
  let num2 = array[1]
  if (checkInput(num1,num2)) return "ERROR";
  return num1 + num2;
}

const multiply = function(array) {
  let num1 = array[0];
  let num2 = array[1]
  if (checkInput(num1,num2)) return "ERROR";
  return num1 * num2;
}

const divide = function(array) {
  let num1 = array[0];
  let num2 = array[1]
  if (checkInput(num1,num2)) return "ERROR";
  if (num2 === 0) return "ERROR";
  return num1 / num2;
}
const clear = function(numbersArray) {
  numbersArray = [];
  return numbersArray;
}