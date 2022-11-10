let curOperator = "";
let firstPart = "";
let secondPart = "";
let curOperatorBtn = null;
let operatorSet = false;


const numInputs = document.querySelectorAll(".num");
const outputScreen = document.querySelector(".output");
const selectedOperator = document.querySelectorAll(".operator");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");
const pointBtn = document.getElementById("point");
const backBtn = document.getElementById("back");

clearBtn.addEventListener("click", fullClear);
equalsBtn.addEventListener("click", execute);
pointBtn.addEventListener("click", addPoint);
backBtn.addEventListener("click", () => outputScreen.textContent = "0")

numInputs.forEach(
  (btn) => btn.addEventListener("click", () => updateOutput(btn.textContent))
);

selectedOperator.forEach(
  (btn) => btn.addEventListener("click", () => setOperation(btn, btn.textContent))
);

function updateOutput(num) {
  if (outputScreen.textContent === "0") {
    outputScreen.textContent = ""
  }
  if (operatorSet == true) {
    outputScreen.textContent = ""
    operatorSet = false;
  }
  outputScreen.textContent += num
}

function setOperation(operatorBtn, operator) {
  if (curOperator) return
  firstPart = outputScreen.textContent;
  curOperator = operator;
  curOperatorBtn = operatorBtn
  curOperatorBtn.style.border = "2px solid black";
  operatorSet = true;
}

function execute() {
  if (!curOperator) return
  secondPart = outputScreen.textContent;
  curOperatorBtn.style.border = null;
  outputScreen.textContent = Math.round(operate(firstPart, secondPart, curOperator) * 1000000) / 1000000;
  curOperator = "";
}

function fullClear() {
  outputScreen.textContent = "0";
  firstPart = secondPart = curOperator = ""
}

function addPoint() {
  if (outputScreen.textContent.includes(".")) return
  outputScreen.textContent += "."
}

function add(a, b) {
    return Number(a) + Number(b);
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}


function operate(a, b, operator) {
    switch (operator) {
        case '+':
          return add(a, b)
        case '−':
          return subtract(a, b)
        case '×':
          return multiply(a, b)
        case '÷':
          return divide(a, b)
    }
}




