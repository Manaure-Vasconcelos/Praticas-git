/* 
    - Nas classes pode atrelar os metodos diretamente na classe pai que ira agir como um prototype. Ou seja, usa o msm metodo para todos os elementos criados pela classe mas utiliza apenas 1 instacia.
    - Quando se usa get e set ja fica setado no objeto.
    - metodo GET: quando invocado busca um valor existente dentro do objeto.
    - metodo SET: quando invocado seta um novo valor em um parametro do objeto.
*/

class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }

    comer() {
        console.log(`${this.nome} está comendo`);
    }

    get falarIdade() {
        console.log(`Tenho ${this.idade} anos.`);
    }

    set corrigirIdade(idade) {
        if(typeof idade !== 'number') return;
        this.idade = idade;
    }
}   

const p1 = new Pessoa('Manaure', 'Vasconcelos', 26)

p1.corrigirIdade = 22; // usando o set para atribuir novo valor
p1.falarIdade // usando o get para buscar valor ja existente.

class Hipoteca extends Pessoa {
    constructor(nome, sobrenome, idade, valor, meses){
        super(nome, sobrenome, idade); // herança com o pai
        this.valor = valor;
        this.meses = meses;
    }

    get financiamento() { // possui acesso aos valores do objeto.
        console.log(`getter: ${(this.valor/this.meses).toFixed(2)}`);
    }

    static financiamento(valor, meses) { // não tem acesso aos valores da instancia, por isso está sendo usado parametros.
        console.log(`static: ${(valor/meses).toFixed(2)}`);
    }
}

const casa = new Hipoteca('Millene', 'Soares', 24, 100000, 20); // valores passados para o constructor do objeto

casa.corrigirIdade = 23; // usando o set de Pessoa
console.log(casa);
casa.financiamento  // usando o get de hipoteca
Hipoteca.financiamento(100000, 20); // Para chamar metodo estatico tem que usar o a classe como referencia(hipoteca) e não a instancia(casa) 

/* const velocidade = Symbol('Velocidade');
class Carro {
    constructor(marca) {
        this.marca = marca;
        this[velocidade] = 0;
    }

    set velocidade(value) {
        if (value >= 200 || value <= 0) return;
        if (typeof value !== 'number') return;
        this[velocidade] = value;
    }

    get velocidade() {
        return this[velocidade];
    }

    acelerar() {
        if (this[velocidade] >= 150) return
        this[velocidade]++;
    }

    freiar() {
        if (this.velocidade <= 0) return
        this[velocidade]--;
    }
}

const carro1 = new Carro('ferrari')

for (let i = 0; i < 155; i++) {
    carro1.acelerar()
}
console.log(carro1)

for (let i = 0; i < 100; i++) {
    carro1.freiar()
}
console.log(carro1)

carro1.velocidade = 100
console.log(carro1) */
