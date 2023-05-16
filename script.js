const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const clearButton = document.querySelector("#clear");
const calculateButton = document.querySelector("#calculate");

let firstOperand = null;
let operator = null;
let secondOperand = null;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.value;

    if (!isNaN(value)) {
      // if button is a number
      if (operator === null) {
        if (firstOperand === null) {
          firstOperand = value;
        } else {
          firstOperand += value;
        }
        display.value = firstOperand;
      } else {
        if (secondOperand === null) {
          secondOperand = value;
        } else {
          secondOperand += value;
        }
        display.value = secondOperand;
      }
    } else {
      // if button is an operator
      if (value === "C") {
        firstOperand = null;
       
