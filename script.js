
//* Additon function *//
const add = () => {
    return (a + b);
}

//* Subtraction function */
const sub = () => {
    return (a - b)
}

//* Multiplication function */
const multiply = () => {
    return (a * b)
}

//* Division function */
const divide = () => {
    return (a / b)
}

//* Operate function */
const operate = () => {
    if (operate === '+') {
        return add();
    } else if (operator === '-') {
        return sub();
    } else if (operator === '*') {
        return multiply();
    } else if (operator === '/') {
        return divide();
    }
};

//* Event listeners */

[a + b, a - b, a * b, a / b].forEach((item, index) => {
    if (index === 0) {
        operator = '+';
    } else if (index === 1) {
        operator = '-';
    } else if (index === 2) {
        operator = '*';
    } else if (index === 3) {
        operator = '/';
    }
});





