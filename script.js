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
    if(!intervalo){
        intervalo = setInterval(watch,1000);
    }
    
}

function parar() {
    clearInterval(intervalo)
    intervalo = null;
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
    if(seg==60){
        seg=0;
        min++;
        if(min==60)
        {
            min=0;
            h++;  
        }
    }
    document.getElementById("segundos").innerText=doisdigitos(seg);
    document.getElementById("minutos").innerText=doisdigitos(min);
    document.getElementById("horas").innerText=doisdigitos(h);
}