/* 
705.484.450-52 
075.329.103-77

7x  0x  5x  4x  8x  4x  4x  5x  0x  numero do cpf s/ digitos
10  9   8   7   6   5   4   3   2   multiplica 
70  0   40  28  48  20  16  15  0   resultado da multiplicação -> soma tudo e faz o calculo abaixo.

11 - (237 % 11) = 5 (primeiro digito)
se o resultado for maior que 9, consideramos 0;

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x  numero do cpf /s digitos + o resultado acima.
11  10  9   8   7   6   5   4   3   2   multiplica   
77  0   45  32  56  24  20  20  0   10  resultado da multiplicação -> soma tudo e faz o calculo abaixo.

11 - (284 % 11) = 2 (segundo digito)
se o resultado for maior que 9, consideramos 0;

depois dos dois calculos e obtiver os dois digitos, concatenamos ao cpf e comparamos os dois.
705.484.450-52 === 705.484.450-52  se der iguais o cpf é valido.
*/

// Resolução pessoal
const verificaCpf = (cpf) => {
    const cpfLimpo = somenteNumeros(cpf)
    const cpfVerificado = gerarCpfVerificado(cpfLimpo) 
    
    cpfLimpo === cpfVerificado ? console.log('cpf valido') : console.log('cpf invalido')
}

const somenteNumeros = (cpf) => cpf.replace(/\D+/g, '');

const gerarCpfVerificado = (cpf) => {
    let cpfTemp = cpf.slice(0, -2)
    cpfTemp += calculoCpf(cpfTemp)
    cpfTemp += calculoCpf(cpfTemp)
    return cpfTemp
}

const calculoCpf = (cpf) => {
    let multiplicador = cpf.length + 1;
    let temp = 0;
    for (number of cpf) {
        temp += number * multiplicador;
        multiplicador--
    }
    const primeiroDigito = 11 - (temp % 11);
    if (primeiroDigito > 9) return '0';
    return primeiroDigito
}

verificaCpf('705.484.450-52')


// Resolução usando classes e prototypes.
class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            get: function () {
                return cpfEnviado.replace(/\D+/g, '');
            }
        })
    }

    verifica() {
        if (typeof this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false;
    
        let cpfTemp = this.cpfLimpo.slice(0, -2)
        cpfTemp += ValidaCpf.calculo(cpfTemp)
        cpfTemp += ValidaCpf.calculo(cpfTemp)
    
        return this.cpfLimpo === cpfTemp ? ('Cpf Valido') : 'Cpf Invalido';
    
    }

    static calculo(cpf) { // Indicado usar static quando tem um metodo que não utiliza os valores do objeto.
        let multiplicador = cpf.length + 1;
        let temp = 0;
        for (number of cpf) {
            temp += number * multiplicador;
            multiplicador--
        }
        const digito = 11 - (temp % 11);
        return digito > 9 ? '0' : String(digito);
    }

    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }
}

const cpf = new ValidaCpf('075.329.103-77')

console.log(cpf.verifica())