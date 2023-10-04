// Representa dados vindo de uma API
const peoples = [
    { name: 'Manaure', age: 25 },
    { name: 'Ronaldo', age: 60 },
    { name: 'Elen', age: 15 },
    { name: 'Jose', age: 40 },
    { name: 'Millene', age: 30 }
]

/*  - O método .map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado. 
    - Modifica o array original.
    - Tem está sendo criado ID aleatorios com 9 digitos entre numeros e letras.
*/
peoples.map(obj => {
    obj.id = Math.floor(Date.now() * Math.random()).toString(36)
    return obj
})

console.log(peoples)
const newPeoples = new Map() // invoca um mapa

/*  - Ja que são objetos, pode fazer a desetruturação diretamente no for of.
    - SET para criar o valor e agregar ao map.
    - GET para obter o valor ja existente na chave.
    - Nesse caso, estou criando um ID unico para cada usuario e posso acessa-lo facilmente por ter criado um mapa contendo o ID a frente identificando cada usuario.
*/
for (const { id } of peoples) {
    newPeoples.set(id, ...peoples)
}

console.log(newPeoples)
