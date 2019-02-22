function mostrar() {

	var contador;
	var respuesta;
	contador = 0;
	respuesta = 's';

	var maximo;
	var minimo;
	maximo = -999;
	minimo = 999;

	while (respuesta == 's') {
		contador = contador + 1;
		numero = prompt("ingrese el numero");
		numero = parseInt(numero);
		if(numero > maximo){
			maximo = numero
		} 
		if(numero > minimo){
			minimo = numero
		} 
		respuesta = prompt("ingrese 'si' para continuar");
	}
	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;
}//FIN DE LA FUNCIÓN