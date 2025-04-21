let seg=0;
let min=0;
let h=0;
let intervalo

function iniciar() {
    intervalo = setInterval(watch,10)
}


function parar() {
    clearInterval(intervalo)
}

function zerar() {
    clearInterval(intervalo)
    seg=0;
    min=0;
    h=0;
}
function watch(){
    seg++;
    document.getElementById("segundos").innerText=seg;
    if(seg==60){
        seg=0;
        min++;
        document.getElementById("minutos").innerText=min;
        if(min==60)
        {
            min=0;
            h++;
            document.getElementById("horas").innerText=h;
        }
    }
}