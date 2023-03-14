
let a = 0;
let b = 0;
let result = (a, b);
let operation = ["+", "-", "*", "/"]





const numberButton = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");

const screen = document.querySelector(".screen");
const addBtn = document.querySelector(".addBtn");
const subBtn = document.querySelector(".subBtn");
const multiplyBtn = document.querySelector(".multiplyBtn");
const divideBtn = document.querySelector(".divideBtn");
const clearBtn = document.querySelector(".clearBtn");
const decimalBtn = document.querySelector(".decimalBtn");
const equalBtn = document.querySelector(".equalBtn");
const backspaceBtn = document.querySelector(".backspaceBtn");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btn0 = document.querySelector(".btn0");

function add(a, b) {
    result = a + b;
    return;
};

function sub(a, b) {
    result = a - b;
    return;
};

function multiply(a, b) {
    result = a * b;
    return;
};

function divide(a, b) {
    result = a / b;
    return;
};


//* Backspace function */
function backspace() {
    screen.textContent.slice(0, -1);
    return;
};

function clear() {
    result = 0;
    screen.textContent = "0";
    return;
}

function decimal() {
    screen.textContent.append(".");
    return;
}

function equal() {
    screen.textContent = result;
    return;
}

function calculate() {
    if (operation == "+") {
        add(a, b);
    } else if (operation == "-") {
        sub(a, b);
        result = a - b;
    } else if (operation == "*") {
        multiply(a, b);
    } else if (operation == "/") {
        divide(a, b);
    }
    return;
}





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
    screen.textContent = "=";

});

backspaceBtn.addEventListener("click", () => {
    screen.textContent = backspace();
});

clearBtn.addEventListener("click", () => {
    screen.textContent = "0";
});

decimalBtn.addEventListener("click", () => {
    screen.textContent = ".";
});

equalBtn.addEventListener("click", () => {
    return equal();
});



