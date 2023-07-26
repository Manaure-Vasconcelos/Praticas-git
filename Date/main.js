const data = new Date();
let indexDiaSemana = data.getDay()
let diaMes = data.getDate()
let indexMes = data.getMonth()
let ano = data.getFullYear()
let hora = data.getHours()
let min = data.getMinutes()

const dataContainer = document.querySelector('.data-container')

let mes = getMonthNow(indexMes);
let diaSemana = getDayOfWeek(indexDiaSemana);

function getDayOfWeek(indexDiaSemana) {
    const diaSemana = [
        'domingo',
        'lunes',
        'martes',
        'miercoles',
        'jueves',
        'viernes',
        'sabado'
    ]
    return diaSemana[indexDiaSemana]
}

function getMonthNow(indexMes) { 
    const mes = [
        'janeiro', 
        'fevereiro', 
        'março',
        'abril', 
        'maio',
        'junio', 
        'julio', 
        'agosto', 
        'setembro', 
        'outubro', 
        'novembro', 
        'dezembro'
    ]
    return mes[indexMes];
}

function formatTime (time){
    return time >= 10 ? time : `0${time}`
}

dataContainer.innerHTML = `${diaSemana}, ${diaMes} de ${mes} de ${ano}. ${formatTime(hora)}:${formatTime(min)}`;

/* const dataContainer = document.querySelector('.data-container');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};


dataContainer.innerHTML = data.toLocaleString('es-AR', opcoes); */