const timerDisplay = document.querySelector('.timer');
let second = 0;
let timer;

/*Criando o cronometro de acordo com os milisegundos. Foi feita uma variavel em segundos e entao passada para a função, dentro dela foi multiplicado por 1000 para dar o valor de milisegundos. Foi feito isso pq a função Date funciona por milisegundo. Ao final a função retorna o valor formatado em pt-BR, com timeZone e formato 12 horas.*/
const getHoursOfSeconds = (second) => {
    const data = new Date(second * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
};

const startTimer = () => {
    timer = setInterval(() => {
        second++;
        timerDisplay.innerHTML = getHoursOfSeconds(second);
        timerDisplay.style.color = 'green';
    }, 1000);
};

/*Aqui captura todos os eventos do documento e coloca em uma variavel, dentro disso coloca-se uma condição, se o click for em determinadas classes...aconteça algo. Tem que escrever a classe que foi colocada no elemento. 
Com isso não precisa selecionar cada botão, const btn = queryselector... Pq aqui ja captura todos os eventos do documento*/
document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('start')){
        clearInterval(timer)
        startTimer(); 
    }
    if (el.classList.contains('pause')){
        clearInterval(timer)
        timerDisplay.style.color = 'red'
    }
    if (el.classList.contains('reset')){ 
        clearInterval(timer)
        second = 0;
        timerDisplay.innerHTML = '00:00:00'
        timerDisplay.style.color = 'black';
    }
});



/* const showHours = () => {
    let hours = new Date();

    // Retorno um a hora em gormato de string, posso escolher o formato 12 horas ou não, e dizer quanto digitos quero que mostre.
    return hours.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false 
    })
}

// Função anonima chamada a partir do setInterval. Ela realiza o chamado da função de acordo com o quantidade de milésimos de segundos que for passado. Então a cada 1000 milliseconds a função é executada novamente.
const timer = setInterval( () => {
    console.log(showHours())
}, 1000)

// função anonima chamada que realiza o bloco apenas uma vez, é passado um tempo em milisegundos e então a ação é executada. tambem esta usando a função do js clearinterval e passado a variavel que tem o setInterval.
// Pode ser usada para exibir algo após um determinado tempo.
setTimeout( () => {
    clearInterval(timer)
}, 5000) */


