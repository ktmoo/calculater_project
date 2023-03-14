
let a = 0;
let b = 0;

let operation = ["+", "-", "*", "/"];

let firstNumber = a;
let secondNumber = b;
let defaultScreen = " ";

//* Selectors */

const screen = document.querySelector(".screen");
const addBtn = document.querySelector(".add");
const subBtn = document.querySelector(".sub");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const clearBtn = document.querySelector(".clear");
const decimalBtn = document.querySelector(".decimal");
const equalBtn = document.querySelector(".equal");
const backspaceBtn = document.querySelector(".backspace");
const btn1 = document.querySelector("button[data-number='1']")
const btn2 = document.querySelector("button[data-number='2']")
const btn3 = document.querySelector("button[data-number='3']")
const btn4 = document.querySelector("button[data-number='4']")
const btn5 = document.querySelector("button[data-number='5']")
const btn6 = document.querySelector("button[data-number='6']")
const btn7 = document.querySelector("button[data-number='7']")
const btn8 = document.querySelector("button[data-number='8']")
const btn9 = document.querySelector("button[data-number='9']")
const btn0 = document.querySelector("button[data-number='0']")


function add(a, b) {
    return a + b;
};

function sub(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};


//* Backspace function */
function backspace() {
    screen.textContent.slice(0, -1);
    return;
};

function clear() {
    screen.textContent = "0";
    return;
}

function decimal() {
    screen.textContent.append(".");
    return;
}

function equal() {
    screen.textContent.equalBtn();
    return result;
}


function operate() {
    if (screen.textContent === "+") {
        result = add(a, b);
    } else if (screen.textContent === "-") {
        result = sub(a, b);
    } else if (screen.textContent === "*") {
        result = multiply(a, b);
    } else if (screen.textContent === "/") {
        result = divide(a, b);
    } else {
        result = "Error";
    }
    return result;
};









//* Number buttons event listeners */
btn1.addEventListener("click", () => {
    screen.textContent += "1";

});

btn2.addEventListener("click", () => {
    screen.textContent += "2";
});

btn3.addEventListener("click", () => {
    screen.textContent += "3";
});

btn4.addEventListener("click", () => {
    screen.textContent += "4";
});

btn5.addEventListener("click", () => {
    screen.textContent += "5";
});

btn6.addEventListener("click", () => {
    screen.textContent += "6";
});

btn7.addEventListener("click", () => {
    screen.textContent += "7";
});

btn8.addEventListener("click", () => {
    screen.textContent += "8";
});

btn9.addEventListener("click", () => {
    screen.textContent += "9";
});

btn0.addEventListener("click", () => {
    screen.textContent += "0";
});

//* Operation buttons event listeners */
addBtn.addEventListener("click", () => {
    screen.textContent = "+";
});

subBtn.addEventListener("click", () => {
    screen.textContent = "-";
});

multiplyBtn.addEventListener("click", () => {
    screen.textContent = "*";
});

divideBtn.addEventListener("click", () => {
    screen.textContent = "/";
});

clearBtn.addEventListener("click", () => {
    screen.textContent = "";
});

decimalBtn.addEventListener("click", () => {
    screen.textContent = ".";
});

equalBtn.addEventListener("click", () => {
    screen.textContent = "="

});

backspaceBtn.addEventListener("click", () => {
    screen.textContent = backspace();
});



decimalBtn.addEventListener("click", () => {
    screen.textContent = ".";
});

