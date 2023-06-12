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
const clear = function(memoryArray) {
  consecutiveEqual = false;
  consecutiveOperation = false;
  memoryArray = [null, null, null];
  userInput = "0";
  return memoryArray;
}

/* 
[OK] como construir os números (string);
  [OK] adicionar novo item na string
  [OK] remover elemento da string
  [OK] se a string for 0, apertar 0 não muda ela;
  [OK] garantir que a string só tenha um ponto; 
  [OK] como o DELETE funcionará com o ponto decimal?
*/

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

// through keyboard (future feature)

// show number on display
const displayScreen = document.querySelector('#display');
displayScreen.textContent = '0';
window.addEventListener('click', () => {displayScreen.textContent = userInput});

/* == CALCULATOR LOGIC == */

// types of operation
  // simpleOperation = if called w/ equal
    // consecutiveEqual flag turned on
  // chainOperation = if called w/ operation sign
    //consecutiveOperator boolean flag;
      //if equal operator, do nothing;
      //if different operator, call changeOperation;
// negate consecutive operator button presses;
  // consecutiveOperator boolean flag;
  // consecutiveEqual boolean flag;

/*
possible "call to action" scenarios:
WHEN THE MEMORY IS EMPTY
  [ ] user inputs a number then presses an operation button;
  [ ] user is returning from a operation ended w/ "=" then press an operation button;
WHEN THERE IS VALUES ALLOCATED IN THE MEMORY ARRAY
  [ ] user inputs a number then presses the equal sign;
    -> simpleOperation function;
      -> call operate;
      -> clear memory
  [ ] user inputs a number then presses another operation sign;
    -> chainOperation function;
      -> call operate;
      -> prepare memory for next input;
WEIRD BEHAVIOR
  [ ] consecutive operation presses
    [ ] same operation button being pressed
      -> ignore action;
    [ ] different operation button being pressed
      -> changeOperation function;
        -> change operation in memory;
  [ ] multiple equal signs presses
    * with empty memory
      -> ignore action;
    * with allocated memory
      -> ignore action
  [ ] user press a number after returning an operation
    [ ] turn resetInputFlag ON!
*/

// let calculatorMemory = [null, null, null]
// let consecutiveEqual = false;
// let consecutiveOperation = false

// const operate = function(memoryArray) {
//   const num1 = parseFloat(memoryArray[0]);
//   const num2 = parseFloat(memoryArray[1]);
//   const operation = memoryArray[2];
//   const sevenDigitNumber = parseFloat((operation(num1, num2)).toFixed(7));
//   resetInputFlag = true;
//   return sevenDigitNumber;
// }
// const callToAction = function() { 

// }
// const simpleOperation = function() {

// }
// const chainOperation = function() {

// }