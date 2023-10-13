// Heranças com constructor function ou classes.
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

/*  - criando um prototype para melhorar a performance do obj -> Essa afirmação só é valida para constructor function
    - Em class pode acoplar diretamente na class que vai agir como um prototype.
*/
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

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
Produto.prototype.aumento = function (quantidade) {
    this.preco += quantidade;
}

class Camiseta extends Produto {
    constructor(nome, preco, cor) {
        super(nome, preco)
        this.cor = cor ?? 'black';
    }
}
Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

/*  - Essa sintaxe é antiga e é atrelada a constructor function.
    - Para class não precisa disso, o metodo Extends ja faz a ligação.
*/

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

class Caneca extends Produto {
    constructor(nome, preco, material) {
        super(nome, preco);
        this.material = material;
    }
}

const produto = new Produto('generico', 10);
const camiseta = new Camiseta('regata', 100, 'azul');
const caneca = new Caneca('caneca', 5, 'Porcelana');
produto.aumento(10)
camiseta.aumento(50)
caneca.aumento(20)

console.log(produto)
console.log(camiseta)
console.log(caneca)

/*
    - A modo usado acima é especificamente para classes.
    - Não funciona com funcion constructor.
    - Metodos do filhos sobrescrevem metodos do pai.
    - Extends = linkar as duas classes.
    - super = fazer o chamado para a classe pai.
*/

/*
function Produto2(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto2.prototype.aumento = function (quantidade) {
    this.preco += quantidade;
}

function Camiseta2(nome, preco, cor) {
    Produto2.call(this, nome, preco)
    this.cor = cor ?? 'black';
}

Camiseta2.prototype = Object.create(Produto2.prototype);
Camiseta2.prototype.constructor = Camiseta2;

const produto2 = new Produto2('generico2', 20);
const camiseta2 = new Camiseta2('regata2', 200, 'rosa');
camiseta2.aumento(20)
console.log(produto2)
console.log(camiseta2)
/* 
    - As function constructor podem ser substituidas por classes, é mais atual.
*/

// Heranças com fatory functions
console.log('')

/* const pessoaPrototype = {
    falar() {
        console.log(`${this.nome} está falando`)
    },
    comer() {
        console.log(`${this.nome} está comendo`)
    },
    falarIdade() {
        console.log(`Tenho ${this.idade} anos.`)
    }
} */

const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    }
}

const falarIdade = {
    falarIdade() {
        console.log(`Tenho ${this.idade} anos`)
    }
}

const pessoaPrototype = Object.assign({}, falar, comer, falarIdade);

function pessoa(nome, sobrenome, idade) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome },
        idade: { value: idade }
    });
}

const pessoa1 = pessoa('gustavo', 'silva', 20)

pessoa1.falar()
pessoa1.comer()
pessoa1.falarIdade()

/* 
    - Achei mais complicada e extensa de codar.
    - Pode usar de maneira desacoplada e depois fazer um mixin de objto que contem o metodo
*/
