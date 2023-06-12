/* == MATH OPERATIONS == */

const checkInput = function(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) return true;
}
const add = function(num1, num2) {
  if (checkInput(num1,num2)) return "ERROR";
  return num1 + num2;
}
const subtract = function(num1, num2) {
  if (checkInput(num1,num2)) return "ERROR";
  return num1 - num2;
}
const multiply = function(num1, num2) {
  if (checkInput(num1, num2)) return "ERROR";
  return num1 * num2;
}
const divide = function(num1, num2) {
  if (checkInput(num1,num2)) return "ERROR";
  if (num2 === 0) return "ERROR";
  return num1 / num2;
}
const clearMemory = function() {
  return [null, null, null]
}
const clearInput = function(userInput) {
  return "0"
}
const clearFlags = function(variable) {
  return false;
}
const clearAll = function() {
  consecutiveEqual = clearFlags();
  consecutiveOperation = clearFlags();
  calculatorMemory = clearMemory();
  userInput = clearInput();
}

/* == USER INPUT == */

let userInput = "0";
let resetInputFlag = false;

const resetInputCheck = function(resetInputFlag, userInput) {
  if (resetInputFlag === true) {
    resetInputFlag = false;
    return "0"
  };
  return userInput;
}
const includeDigit = function(buttonValue, userInput) {
  consecutiveEqual = false;
  consecutiveOperation = false;
  userInput = resetInputCheck(resetInputFlag, userInput);
  if (userInput.length > 7) return userInput;
  if(userInput === "0" && buttonValue === "0") return userInput;
  if(userInput.includes(buttonValue) && buttonValue === ".") return userInput;
  if(userInput === "0" && buttonValue !== '.') {
    return buttonValue; 
  } else {
    return userInput + buttonValue;
  }
}
const removeDigit = function(userInput) {
  consecutiveEqual = false;
  consecutiveOperation = false;
  userInput = resetInputCheck(resetInputFlag, userInput);
  if(userInput === "0") return userInput;
  return userInput.split("").slice(0, -1).join("");
}

/* == READING THE USER'S INPUT == */
// clicking in the UI

const addButton = document.querySelector('#button-add');
const subtractButton = document.querySelector('#button-subtract');
const multiplyButton = document.querySelector('#button-multiply');
const divideButton = document.querySelector('#button-divide');
const equalButton = document.querySelector('#button-equal');

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(number => number.addEventListener(
  'click', () => {userInput = includeDigit(number.textContent, userInput)}
));

const delButton = document.querySelector('#button-delete');
delButton.addEventListener('click', () => {userInput = removeDigit(userInput)});

const clearButton = document.querySelector('#button-clear');
clearButton.addEventListener('click', () => {clearAll()})

// through keyboard (future feature)

// show number on display
const displayScreen = document.querySelector('#display');
displayScreen.textContent = '0';
window.addEventListener('click', () => {displayScreen.textContent = userInput});

/* == CALCULATOR LOGIC == */

let calculatorMemory = [null, null, null]
let consecutiveEqual = false;
let consecutiveOperation = false