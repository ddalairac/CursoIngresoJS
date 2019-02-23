
var eleccionMaquina;
var eleccionUsuario
var ContadorDeEmpates = 0;
var ContadorDeGanadas = 0;
var ContadorDePerdidas = 0;


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
			mensaje += "piedra, ";
			switch (eleccionUsuario) {
				case 1:
					mensaje += "empate";
					ContadorDeEmpates ++;
					break;
				case 2:
					mensaje += "ganaste";
					ContadorDeGanadas++;
					break;
				case 3:
					mensaje += "perdiste";
					ContadorDePerdidas++;
					break;
			}
			break;
		case 2:
			mensaje += "papel, ";
			switch (eleccionUsuario) {
				case 1:
					mensaje += "perdiste";
					ContadorDePerdidas++;
					break;
				case 2:
					mensaje += "empate";
					ContadorDeEmpates ++;
					break;
				case 3:
					mensaje += "ganaste";
					ContadorDeGanadas++;
					break;
			}
			break;
		case 3:
			mensaje += "tijera, ";
			switch (eleccionUsuario) {
				case 1:
					mensaje += "ganaste";
					ContadorDeGanadas++;
					break;
				case 2:
					mensaje += "perdiste";
					ContadorDePerdidas++;
					break;
				case 3:
					mensaje += "empate";
					ContadorDeEmpates ++;
					break;
			}
			break;
	}
	//alert(mensaje);
	mostrarResultado();
}
function mostrarResultado() {
	document.getElementById("ganadas").value = "ganadas: "+ContadorDeGanadas;
	document.getElementById("perdidas").value = "perdidas: "+ContadorDePerdidas;
	document.getElementById("empatadas").value = "empatadas: "+ContadorDeEmpates;

}