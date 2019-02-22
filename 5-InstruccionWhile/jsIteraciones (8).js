function mostrar() {

	var contador;
	var acumulador;
	var respuesta;
	var negativo;
	var positivo;
	contador = 0;
	acumulador = 0;
	respuesta = 'si';
	negativo = 0;
	positivo = 1;

	while (1) {
		contador = contador + 1;
		numero = prompt("ingrese el numero");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		respuesta = prompt("ingrese 'si' para continuar");
		if (numero < 0) {
			positivo = positivo + numero;
		} else {
			negativo = negativo * numero;
		}
		if (respuesta != "si") {
			break;
		}
	}


	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN