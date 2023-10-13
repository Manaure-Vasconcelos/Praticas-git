const display = document.querySelector('.display');
const operators = ['+', '-', '*', '/'];

const isOperator = (char) => {
    return operators.includes(char);
}

const addElement = (el) => {
    const display = document.querySelector('.display');
    if (display.value === 'Operação invalida' || display.value === 'Error') return display.value = el;
    if (isOperator(el)) {
        const lastChar = display.value[display.value.length - 1];
        if (isOperator(lastChar)) {
            display.value = display.value.slice(0, -1);
        }
    }
    display.value += el;
}

const removeElement = () => {
    const text = display.value
    display.value = text.slice(0, -1)
}

const cleanDisplay = () => {
    display.value = ''
}

const equal = () => {
    if (!display.value) {
        display.value = 'Operação invalida'
    } else {
        try {
            'use strict';
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
    }
}

