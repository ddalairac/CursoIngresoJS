function mostrar() {

	var respuesta;
	var numero;
	var maximo;
	var minimo;
	var bandera;
	respuesta = 's';
	bandera = true;

	while (respuesta == 's') {
		numero = prompt("ingrese el numero");
		numero = parseInt(numero);
		if (bandera) {
			maximo = numero;
			minimo = numero;
			bandera = false;
		} else {
			if (numero > maximo) {
				maximo = numero;
			}
			if (numero < minimo) {
				minimo = numero;
			}
		}
		respuesta = prompt("ingrese 's' para continuar");
	}
	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;
}//FIN DE LA FUNCIÓN