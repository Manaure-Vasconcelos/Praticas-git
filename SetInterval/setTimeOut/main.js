const timerDisplay = document.querySelector('.timer');
const btnStart = document.querySelector('.start');
const btnPause = document.querySelector('.pause');
const btnReset = document.querySelector('.reset');

const getHoursOfSeconds = (second) => {
    const data = new Date(second * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
};

const timer = btnStart.addEventListener('click', (event) => {
    setInterval(() => {
        timerDisplay.innerHTML = getHoursOfSeconds(1)
        timerDisplay.style.color = 'green';
    }, 1000);
});

btnPause.addEventListener('click', () => {
    timerDisplay.innerHTML = 'Cliquei no pause';
    timerDisplay.style.color = 'red';
})

btnReset.addEventListener('click', (timer) => {
    clearInterval(timer)
    timerDisplay.style.color = 'black';
})





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


