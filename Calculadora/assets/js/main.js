
const addElement = (el) => {
    const display = document.querySelector('.display');
    const text = display.value
    if (text.endsWith('+')) removeElement();
    if (text.endsWith('-')) removeElement();
    if (text.endsWith('*')) removeElement();
    if (text.endsWith('/')) removeElement();
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
    try {
        display.value = eval(display.value)
    } catch {
        display.value = 'Error'
    }
}

