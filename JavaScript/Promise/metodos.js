function rand(min, max) {
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

// .all() .race() .resolve() .reject()

const promises = [
    'Primeiro valor', // è dado como uma promise ja resolvida, ou seja, ele sempre será o primeiro a ser mostrado, antes das promises.
    esperaAi('Frase 1', rand(1, 4)),
    esperaAi('Frase 2', rand(1, 4)),
    esperaAi('Frase 3', rand(1, 4)),
    'Ultimo valor' // será mostrados antes das promises.
]

// Resolve um conjunto de promises e entrega um valor em array. Caso 1 promise seja falsa, todas irão pro catch().
Promise.all(promises).then(value => {
    console.log(value)
}).catch(err => {
    console.log(err)
});

// Ele usa como parametros um conjunto de promises e entrega a primeira promises a ser resolvida.
Promise.race(promises).then(value => {
    console.log(value)
}).catch(err => {
    console.log(err)
});

// Simula uma função de cache de pagina, está verificando se a pagina ja está em cache. O retorno da função se espera uma promise.
function baixarPagina() {
    const inCache = true;

    if (inCache) return Promise.resolve('Pagina em cache') // Ja entrega uma promise resolvida
    return  Promise.reject('Erro na pagina') // Já entrega um erro esperado.
}

baixarPagina().then(valor => {
    console.log(valor)
}).catch(erro => {
    console.log(erro)
});
