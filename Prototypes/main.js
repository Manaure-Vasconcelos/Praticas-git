class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

Pessoa.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
}

const p1 = new Pessoa('Manaure', 'Vasconcelos')

console.dir(p1.nomeCompleto())


class pessoa2 {
    constructor(nome, sobrenome) {
        return {
            nome,
            sobrenome
        };
    }
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}


const p2 = new pessoa2('millene', 'soares')

console.log(p2.nomeCompleto)

/* Anotações:
    - prototypes só funcionam com constructor functions.
    - não se usa arrow functions, e sim function anonimous.
*/