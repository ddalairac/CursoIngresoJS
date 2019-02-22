function mostrar()
{

	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");
	while(numero > 10 || numero < -1){
		numero = prompt("error, ingrese un número entre 0 y 10.");
	}
	alert("Numero correcto");



}//FIN DE LA FUNCIÓN