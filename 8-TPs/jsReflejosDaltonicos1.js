/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var colores = new Array();
var ColorSecreto;
var tiempoInicio;

colores = [
    'azul',
    'amarillo',
    'marron',
    'verde',
    'celeste',
    'rojo'
]
function comenzar() {
    ColorSecreto = Math.floor(Math.random() * 6);
    document.getElementById("ColorElejido").value = colores[ColorSecreto];
    tiempoInicio = new Date();
    tiempoInicio = tiempoInicio.getTime();

}//FIN DE LA FUNCIÓN
function Responder(colorParametro) {
    if (colores[ColorSecreto] == colorParametro) {
        tiempoFinal = new Date();
        tiempoFinal = tiempoFinal.getTime();
        resultado = tiempoFinal - tiempoInicio;
        resultado = resultado / 1000;
        resultado = resultado.toFixed(2);

        alert("su tiempo fue: " + resultado+ " segundos");
    }



}//FIN DE LA FUNCIÓN
