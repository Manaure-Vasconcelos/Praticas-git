
const addElement = (el) => {
    const display = document.querySelector('.display');
    const text = display.value
    let lastElement = el
    console.log(lastElement);
    if (text.endsWith() === lastElement || text.endsWith() === lastElement || text.endsWith() === lastElement || text.endsWith() === lastElement) {
        display.value = text.slice(0, -1)
    }
    display.value += el
}

const removeElement = () => {
    const display = document.querySelector('.display');
    const text = display.value
    display.value = text.slice(0, -1)
}

const cleanDisplay = () => {
    const display = document.querySelector('.display')
    display.value = ''
}

"use strict"
const equal = () => {
    const display = document.querySelector('.display');
    display.value = eval(display.value)
}

