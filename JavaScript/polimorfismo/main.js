/* polimorfismo:
aqui existe 3 contas, cada uma agindo de uma forma com seus respectivos prototypes.
a Conta(pai) tem os prototypes principais e as outras duas herdam dela.
contaCorrente o metodo sacar sobrescreve o metodo do pai.
contaPoupança o metodo sacar herda do pai. 
*/
class Conta {
    constructor(agencia, conta, saldo) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente.`)
        console.log(`Saldo atual R$ ${this.saldo}`)
        console.log(`Valor a sacar ${valor}`)
        return
    }

    this.saldo -= valor;
    this.verSaldo()
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(`ag.${this.agencia}/c.${this.conta}: Saldo atual R$ ${this.saldo}`)
}

class ContaCorrente extends Conta {
    constructor(agencia, conta, saldo, limite) {
        super(agencia, conta, saldo);
        this.limite = limite;
    }
}

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente.`)
        console.log(`Saldo atual R$ ${this.saldo}`)
        console.log(`Cheque especial R$ ${this.limite}`)
        console.log(`Valor a sacar ${valor}`)
        return
    }

    this.saldo -= valor;
    this.verSaldo()
}

class ContaPoupança extends Conta {
    constructor(agencia, conta, saldo) {
        super(agencia, conta, saldo);
    }
}

const conta1 = new Conta(11, 4235, 1000)
const contaCorrente = new ContaCorrente(22, 2547, 2000, 1000)
const contaPoupança = new ContaPoupança(33, 4579, 5000)

contaPoupança.sacar(5000)
