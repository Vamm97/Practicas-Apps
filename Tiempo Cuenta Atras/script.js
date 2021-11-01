const DiasEl = document.getElementById ('Dias');
const HorasEl = document.getElementById ('Horas');
const MinutosEl = document.getElementById ('Minutos');
const SegundosEl = document.getElementById ('Segundos');


const Nuevoaño ="1 Jan 2022";

function contador(){
    const Fechanuevoaño = new Date(Nuevoaño);
    const Fechaactual = new Date();

    const totalsegundos = (Fechanuevoaño - Fechaactual) / 1000;

    const dias = Math.floor(totalsegundos / 3600 / 24);
    const horas = Math.floor(totalsegundos / 3600) % 24;
    const minutos = Math.floor(totalsegundos / 60) % 60;
    const segundos = Math.floor(totalsegundos) % 60;

    DiasEl.innerHTML = dias;
    HorasEl.innerHTML = formatTime(horas);
    MinutosEl.innerHTML = formatTime(minutos);
    SegundosEl.innerHTML = formatTime(segundos);
    SegundosEl.innerHTML = formatTime(segundos);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time; 
}

contador();
setInterval(contador, 1000);