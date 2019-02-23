/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */

var primerNumero;
var operador;
var operadorMensaje;
var segundoNumero;
var respuesta;
var resultado;
var miIntervalo;

function comenzar() {
    primerNumero = (Math.floor(Math.random() * 10) + 1);
    segundoNumero = (Math.floor(Math.random() * 10) + 1);
    operador = (Math.floor(Math.random() * 4) + 1);

    switch (operador) {
        case 1:
            operadorMensaje = "suma";
            resultado = primerNumero + segundoNumero;
            break;
        case 2:
            operadorMensaje = "resta";
            resultado = primerNumero - segundoNumero;
            break;
        case 3:
            operadorMensaje = "multiplicacion";
            resultado = primerNumero * segundoNumero;
            break;
        case 4:
            operadorMensaje = "division";
            resultado = primerNumero / segundoNumero;
            break;
    }
    console.log("primerNumero " + primerNumero);
    console.log("segundoNumero " + segundoNumero);
    console.log("operador " + operador + " " + operadorMensaje);
    console.log("resultado " + resultado);

    document.getElementById("PrimerNumero").value = primerNumero;
    document.getElementById("Operador").value = operadorMensaje;
    document.getElementById("SegundoNumero").value = segundoNumero;

    miIntervalo = setInterval(finDelTienpo, 4000);

}//FIN DE LA FUNCIÓN

function finDelTienpo() {
    alert("Se acabo el tiempo");
    clearTimeout(miIntervalo);
    document.getElementById("PrimerNumero").value = null;
    document.getElementById("Operador").value = null;
    document.getElementById("SegundoNumero").value = null;
    document.getElementById("Respuesta").value = null;
}
function Responder() {
    clearTimeout(miIntervalo);
    respuesta = document.getElementById("Respuesta").value;
    if (respuesta == resultado) {
        mensaje = "Ganaste";
    } else {
        mensaje = "Burro! volve a la escuela";
    }
    alert(mensaje);
}//FIN DE LA FUNCIÓN
