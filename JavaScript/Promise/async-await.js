function rand(min = 0, max = 4) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (min - max) + min);
    // Função geradora de numero aleatório.
}

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

// Async permite usar a palavra await, que siginifica "Esperar", ou seja, espera a promise ser resolvida. Entrega todos as Promises resolvidas de uma vez.
async function executa() {
    // Usando o try catch para tratamento de dados, caso alguma promise for rejeitada, cai no catch e será possível tratar o erro.
    try {
        const fase1 = await esperaAi('Conexão com o Banco de dados', rand())
        console.log(fase1)
    
        const fase2 = await esperaAi('Buscando dados da base', rand())
        console.log(fase2)
        
        const fase3 = await esperaAi('Tratando os dados', rand())
        console.log(fase3)
        
        const fase4 = await esperaAi('Exibe dados na tela', rand())
        console.log(fase4)

        const fase5 = await esperaAi(12, rand())
        console.log(fase5)
    } catch (e) {
        // Pode-se colocar um .catch para cada promise, mas podemos usar o try catch para captar o erro.
        console.log(e)
    }
}

executa()

/* esperaAi('Conexão com o Banco de dados', rand(1, 3)).then(msg => {
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
}) */
