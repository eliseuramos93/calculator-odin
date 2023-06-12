                /* == MATH OPERATIONS AND BASIC FUNCTIONS == */

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
  calculatorMemory = [null, null, null]
}
const clearInput = function() {
  userInput = "0"
}
const clearFlags = function() {
  resetInputFlag = false;
  blockOperationRepeat = false;
}
const clearAll = function() {
  clearFlags()
  clearMemory();
  clearInput();
}

                            /* == USER INPUT == */

let userInput = "0";
let resetInputFlag = false;

const resetInputCheck = function(resetInputFlag, userInput) {
  if (resetInputFlag === true) {
    clearFlags();
    return "0";
  };
  return userInput;
}
const includeDigit = function(buttonValue, userInput) {
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
  clearFlags();
  userInput = resetInputCheck(resetInputFlag, userInput);
  if(userInput.length === 1) {
    userInput = "0";
    return userInput;
  };
  return userInput.split("").slice(0, -1).join("");
}

                /* == USER INTERFACE AND INTERACTIVITY == */

const addButton = document.querySelector('#button-add');
const subtractButton = document.querySelector('#button-subtract');
const multiplyButton = document.querySelector('#button-multiply');
const divideButton = document.querySelector('#button-divide');
const equalButton = document.querySelector('#button-equal');
const delButton = document.querySelector('#button-delete');
const clearButton = document.querySelector('#button-clear');
const numberButtons = document.querySelectorAll('.number');

// trigger action when user clicks buttons on calculator
numberButtons.forEach(number => number.addEventListener(
  'click', () => {userInput = includeDigit(number.textContent, userInput)}
));
delButton.addEventListener('click', () => {userInput = removeDigit(userInput)});
clearButton.addEventListener('click', () => {clearAll()});
addButton.addEventListener('click', () => callToAction(add));
subtractButton.addEventListener('click', () => callToAction(subtract));
multiplyButton.addEventListener('click', () => callToAction(multiply));
divideButton.addEventListener('click', () => callToAction(divide));
equalButton.addEventListener('click', () => callToAction('result'));

/* == CALCULATOR DISPLAY == */

const displayScreen = document.querySelector('#display');
displayScreen.textContent = '0';
window.addEventListener('click', () => {displayScreen.textContent = userInput});

/* == CALCULATOR LOGIC AND FUNCTIONS == */

let calculatorMemory = [null, null, null];
let blockOperationRepeat = false;

const operate = function(memoryArray) {
  const num1 = parseFloat(memoryArray[0]);
  const num2 = parseFloat(memoryArray[1]);
  const operation = memoryArray[2];
  const sevenDigitNumber = parseFloat((operation(num1, num2)).toFixed(7));
  resetInputFlag = true;
  blockOperationRepeat = true;
  return sevenDigitNumber;
}

const simpleOperation = function() { 
  calculatorMemory[1] = userInput;
  userInput = `${operate(calculatorMemory)}`;
  clearMemory();
}
const chainOperation = function(calledOperation) {
  calculatorMemory[1] = userInput;
  userInput = `${operate(calculatorMemory)}`;
  clearMemory();
  calculatorMemory[0] = userInput;
  calculatorMemory[2] = calledOperation;
}

const callToAction = function(calledOperation) {
  if(calculatorMemory[2] === null && calledOperation === "result") return;
  if(calculatorMemory[2] === null) {
    calculatorMemory[0] = userInput;
    calculatorMemory[2] = calledOperation;
    resetInputFlag = true;
    return;
  }; 
  if(blockOperationRepeat === true) return;
  (calledOperation === "result") ? 
    simpleOperation() : chainOperation(calledOperation);
}