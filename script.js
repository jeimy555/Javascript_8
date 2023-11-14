let papaNoel = document.getElementById("papaNoel");
const dias=document.getElementById("dias");
const horas=document.getElementById("horas");
const minutos=document.getElementById("minutos");
const segundos=document.getElementById("segundos");
const audio = new Audio("./src/sound/musica.mp3");
const botonPlay = document.getElementById("play");
const botonPausa = document.getElementById("pausa");

botonPlay.disabled = true;
botonPausa.disabled = true;

/*function sonido(num)
{
    if (num == 1)
    {
        botonAudio.play();
    } else
    {
        botonAudio.pause();
    }
}*/


function obtenerTiempoFaltante(fechaLimite) {
    let ahora = new Date();
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horaFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return {
        segundosFaltantes,
        minutosFaltantes,
        horaFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }
};
function cuentaRegresiva(tiempoFaltante,reloj,mensaje) {
    const e =document.getElementById(reloj);
    const tiempoActual=setInterval(()=>{
        let t=obtenerTiempoFaltante(tiempoFaltante);
        e.innerHTML=`Falta para navidad`
        dias.innerHTML = t.diasFaltantes;
        horas.innerHTML = t.horaFaltantes;
        minutos.innerHTML = t.minutosFaltantes;
        segundos.innerHTML = t.segundosFaltantes;
        if (t.tiempoFaltante<1) {   
            dias.innerHTML = "00";
            horas.innerHTML = "00";
            minutos.innerHTML = "00";
            segundos.innerHTML = "00";
            clearInterval(tiempoActual);
            e.innerHTML=mensaje;
            papaNoel.classList.add('baila');
            botonPlay.classList.add("on");
            botonPausa.classList.add("on");
            botonPlay.disabled = false;
            botonPausa.disabled = false;
            botonPlay.addEventListener("click", ()=>{
                audio.play();
            });
            botonPausa.addEventListener("click", ()=>{
                audio.pause();
            });
            
        }else{
            papaNoel.classList.remove('baila');
        }
    },1000)
};
cuentaRegresiva('Nov 14 2023 12:00:00 GMT-0500','cuentaRegresiva','¡Feliz Navidad!')
console.log(obtenerTiempoFaltante('Nov 14 2023 07:54:00 GMT-0500'))