const meuEscopo = (function () {
    const form = document.querySelector('#form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const inputPeso = form.querySelector('#input-peso');
        const inputAltura = form.querySelector('#input-altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if (!peso && !altura) return setResult('Preencha os valores', false)
        if (!peso) return setResult('Peso invalido', false)
        if (!altura) return setResult('Altura invalida', false)

        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc);

        const msg = `Seu IMC é ${imc} (${nivelImc})`
        setResult(msg, true)
    });

    function getNivelImc(imc) {
        const nivelImc = [
            'Abaixo do peso',
            'Peso normal',
            'Sobrepeso',
            'Obesidade grau 1',
            'Obesidade grau 2',
            'Obesidade grau 3'
        ];

        if (imc >= 39.9) return nivelImc[5]
        if (imc >= 34.9) return nivelImc[4]
        if (imc >= 29.9) return nivelImc[3]
        if (imc >= 24.9) return nivelImc[2]
        if (imc >= 18.5) return nivelImc[1]
        if (imc < 18.5) return nivelImc[0]

    }

    function getImc(peso, altura) {
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }

    function newP() {
        const p = document.createElement('p');
        return p;
    }

    function setResult(msg, isValid) {
        const result = document.querySelector('#result');
        result.innerHTML = '';

        const p = newP();

        if (isValid) {
            p.classList.add('correto')
        } else {
            p.classList.add('incorreto')
        }

        p.innerHTML = msg;
        result.appendChild(p);
    }
})();