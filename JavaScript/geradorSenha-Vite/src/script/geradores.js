// Geradores
const random = (min, max) => Math.floor(Math.random() * (max - min) + min)
const newUpperCase = () => String.fromCharCode(random(65, 91))
const newLowerCase = () => String.fromCharCode(random(97, 123))
const newNumber = () => String.fromCharCode(random(48, 58))
const symbol = [',', '.', ';', '~', '^', '+', '-', '*', '/', '[', ']', '!', '@', '#', '$', '%', '&', '¨', '(', ')', '"']
const newSymbol = () => symbol[random(0, symbol.length)]

export default function newPassWord(qtd, upperCase, lowerCase, number, symbol) {
    const passWordTemp = [];

    for (let i = 0; i < qtd; i++) {
        upperCase && passWordTemp.push(newUpperCase())
        lowerCase && passWordTemp.push(newLowerCase())
        number && passWordTemp.push(newNumber())
        symbol && passWordTemp.push(newSymbol())
    }

    const passWord = sort(passWordTemp)
    return passWord.join('').slice(0, qtd) || 'Nada selecionado';
}

function sort(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
