/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var eleccionUsuario

function comenzar() {
    eleccionMaquina = (Math.floor(Math.random() * 3) + 1);
    //console.log("numeroSecreto " + eleccionMaquina);
}//FIN DE LA FUNCIÓN
function piedra() {
    comenzar();
    eleccionUsuario = 1;
    resultado()
}//FIN DE LA FUNCIÓN
function papel() {
    comenzar();
    eleccionUsuario = 2;
    resultado()
}//FIN DE LA FUNCIÓN
function tijera() {
    comenzar();
    eleccionUsuario = 3;
    resultado()
}//FIN DE LA FUNCIÓN

function resultado() {
    var mensaje;
    mensaje = "";
    switch (eleccionMaquina) {
        case 1:
            mensaje += "piedra, "
            switch (eleccionUsuario) {
                case 1:
                    mensaje += "empate"
                    break;
                case 2:
                    mensaje += "ganaste"
                    break;
                case 3:
                    mensaje += "perdiste"
                    break;
            }
            break;
        case 2:
            mensaje += "papel, "
            switch (eleccionUsuario) {
                case 1:
                    mensaje += "perdiste"
                    break;
                case 2:
                    mensaje += "empate"
                    break;
                case 3:
                    mensaje += "ganaste"
                    break;
            }
            break;
        case 3:
            mensaje += "tijera, "
            switch (eleccionUsuario) {
                case 1:
                    mensaje += "ganaste"
                    break;
                case 2:
                    mensaje += "perdiste"
                    break;
                case 3:
                    mensaje += "empate"
                    break;
            }
            break;
    }
    alert(mensaje);
}