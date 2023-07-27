// arrays
let a = 'a';
let b = 'b';
let c = 'c';

let number = [, 2, 3, 4, 5];
[a = 'não existe', b, c] = number; //pode usar um valor predeterminado caso o valor não exista.

console.log(a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const [primeiro, segundo, terceiro, ...resta] = numeros;

console.log(primeiro, segundo, terceiro)
console.log(resta);

//objects
const pessoa = {
    nome: 'Manaure',
    sobrenome: 'Vasconcelos',
    idade: 25,
    endereço: {
        rua: 'Las Virreinas',
        numero: 1250
    }
}

// quando atribui uma variavel com o mesmo nome de valor, pode-se usar a desestruturação;
const { nome = 'não existe', ...resto } = pessoa // usou-se um valor padrão caso não exista o valor. usou o operador rest.
const { sobrenome, idade: novaIdade } = pessoa // pode desestruturar mais de uma variavel. Foi atribuido outro valor a variavel.
const { endereço: { rua, numero } } = pessoa; // Acessando os valores dentro do endereço, que é outro objeto.
console.log(nome, sobrenome, novaIdade, rua, numero)
console.log(resto) // usando operador rest