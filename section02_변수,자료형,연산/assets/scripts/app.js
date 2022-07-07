let currentValue = 0;
let logEntries = [];

const getUserInputValue = () => {
  return +userInput.value;
};
const createCalcDescriptionOutput = (operator, currentValue, enteredValue) => {
  const calcDescription = `${currentValue} ${operator} ${enteredValue}`;
  outputResult(currentValue, calcDescription);
};

const add = () => {
  const enteredValue = getUserInputValue();
  const initialResult = currentValue;
  currentValue = currentValue + enteredValue;
  const logEntry = {
    number: enteredValue,
    prevResult: initialResult,
    result: currentValue,
    operator: "ADD",
  };
  logEntries.push(logEntry);
  console.log(logEntries);
  createCalcDescriptionOutput("+", initialResult, enteredValue);
};
const subtract = () => {
  const enteredValue = getUserInputValue();
  const initialResult = currentValue;
  currentValue = currentValue - enteredValue;
  createCalcDescriptionOutput("-", initialResult, enteredValue);
};
const multiply = () => {
  const enteredValue = getUserInputValue();
  const initialResult = currentValue;
  currentValue = currentValue * enteredValue;
  createCalcDescriptionOutput("*", initialResult, enteredValue);
};
const divide = () => {
  const enteredValue = getUserInputValue();
  const initialResult = currentValue;
  currentValue = currentValue / enteredValue;
  createCalcDescriptionOutput("/", initialResult, enteredValue);
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
