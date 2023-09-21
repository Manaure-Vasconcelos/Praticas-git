/*
Metodos uteis

object.entries - itera sobre um obj e devolve um array com os valores
object.assign(des, any)
...(spread) 

object.values
object.keys
object.freeze - impede que seja modificado.
object.getOwnPropertyDescriptor(object, 'prop') - exibe as propriedades do valor passado.
object.defineProperty - define as propriedades de um valor
object.defineProperties - define as propriedades dos valores
*/

// copiando objetos
const produto = { nome: 'caneca', preco: 1.5 }
const outroProduto = { ...produto, material: 'madeira' }
const outroProduto2 = Object.assign({}, produto, { material: 'vidro' })

console.log(produto, outroProduto, outroProduto2)
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
Object.defineProperty(produto, 'nome', {
    value: 'caneca',
    writable: false, // define se vai ser alteravel
    enumerable: true, // exibe o valor
    configurable: true // define se é configuravel
})
produto.nome = 'roupa'
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
