/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
ContadorDeIntentos = 0;

function comenzar()
{
	numeroSecreto=(Math.floor(Math.random() *100) + 1);
	//Genero el número RANDOM entre 1 y 100 
	//alert(numeroSecreto );
}

function verificar()
{
	var numeroIngresado;
	var mensaje;
	ContadorDeIntentos = ContadorDeIntentos + 1;
	intentos.value = ContadorDeIntentos;
	numeroIngresado = numero.value
	//alert("numeroIngresado "+numeroIngresado);
	//alert("ContadorDeIntentos "+ContadorDeIntentos);

	if(numeroIngresado == numeroSecreto){
		mensaje = ("sos un genio, adivinaste en "+ContadorDeIntentos+" intentos");
	} else {
		if(numeroIngresado < numeroSecreto){
			mensaje  = ("falta");
		} else {
			mensaje  = ("te pasaste");
		}
	}
	alert(mensaje);
}