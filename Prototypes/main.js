class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// criando um prototype para melhorar a performance do obj.
Pessoa.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
}

const p1 = new Pessoa('Manaure', 'Vasconcelos')

console.log(p1.nomeCompleto())

const p2 = new Pessoa('Millene', 'Soares')

Object.setPrototypeOf(p2, p1) // Ligando os dois obj por herança.

console.log(p2.nomeCompleto())

const p3 = Object.create(Pessoa.prototype) // Criando obj e atribindo a herança diretamente.
p3.nome = 'Gilda';
p3.sobrenome = 'Sousa'

console.log(p3.nomeCompleto())

/* Anotações:
    - prototypes só funcionam com constructor functions.
    - não se usa arrow functions, e sim function anonimous.
*/