/* 
    Simulando uma situação assincrona, como por exemplo um banco de dados.
    Quando faz a conexão com o BD leva um tempo ate analisar, processar e tratar os dados e por fim, exibir.
*/

/* function esperaAi(msg, tempo, callback) {
    setTimeout(() => {
        console.log(msg)
        if(callback) callback()
    }, tempo)
}

esperaAi('Frase 1', rand(1, 3), function() {
    esperaAi('Frase 2', rand(1, 3), function() {
        esperaAi('Frase 3', rand(1, 3))
    })
}) */

// Metodo usado acima foi o de callback, uso ultrapassado.

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (min - max) + min);
    // Função geradora de numero aleatório.
}
// ================================================================================================= //

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        // Capta o erro e envia para o cath.
        if (typeof msg !== 'string') reject('BAD VALUE');

        // Simulando banco de dados.
        setTimeout(() => {
            resolve(msg); // Uma promessa. Será executada. Se conecta ao .then
        }, tempo)
    })
}

// A promises permite que os processos sejam executados em cadeia.
esperaAi('Conexão com o Banco de dados', rand(1, 3)).then(msg => {
    // Trata o dado como quiser.
    console.log(msg)
    return esperaAi('Buscando dados da base', rand(1, 3))
}).then(msg => {
    console.log(msg)
    return esperaAi('Tratando os dados', rand(1, 3))
}).then(msg => {
    console.log(msg)
    return esperaAi('Exibe dados na tela', rand(1, 3))
}).then(msg => {
    console.log(msg)
    return esperaAi(123, rand(1, 3))
    // Caso ocorra um erro e seja encaminhado para o cath, os blocos em seguida não serão exibidos.
}).then(msg => {
    console.log(`Essa msg não será exibida`)
}).catch(e => {
    console.log(`ERROR: ${e}`)
    // Pode tratar o error como quiser.
})
