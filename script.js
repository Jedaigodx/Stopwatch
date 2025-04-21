let seg=0;
let min=0;
let h=0;
let intervalo

function doisdigitos(digito){
    if(digito<10){
        return('0'+digito);
    }
    else{
        return(digito);
    }
}

function iniciar() {
    intervalo = setInterval(watch,1000)
}


function parar() {
    clearInterval(intervalo)
}

function zerar() {
    clearInterval(intervalo)
    seg=0;
    document.getElementById("segundos").innerText="00";
    min=0;
    document.getElementById("minutos").innerText="00";
    h=0;
    document.getElementById("horas").innerText="00";
}
function watch(){
    seg++;
    document.getElementById("segundos").innerText=doisdigitos(seg);
    if(seg==60){
        seg=0;
        min++;
        document.getElementById("minutos").innerText=doisdigitos(min);
        if(min==60)
        {
            min=0;
            h++;
            document.getElementById("horas").innerText=doisdigitos(h);
        }
    }
}