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

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const produto = new Produto('generico', 10);
const camiseta = new Camiseta('regata', 100, 'azul');
camiseta.aumento(100)
console.log(produto)
console.log(camiseta)
/*
    - A modo usado acima é especificamente para classes.
    - Não funciona com funcion constructor.
    - Metodos do filhos sobrescrevem metodos do pai.
    - Extends = linkar as duas classes.
    - super = fazer o chamado para a classe pai.
*/

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
