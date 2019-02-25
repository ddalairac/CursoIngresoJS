function mostrar() {
	var numero1;
	var numero2;
	var resultado;
	var mensaje;

	numero1 = prompt("Ingrese un número");
	numero2 = prompt("Ingrese otro número");



	if (numero1 == numero2) {
		resultado = numero1 + numero2;
		mensaje = resultado;

	} else {
		numero1 = parseInt(numero1);
		numero2 = parseInt(numero2);
		if (numero1 > numero2) {

			resultado = numero1 - numero2;
			mensaje = resultado;
		} else {
			if (numero1 < numero2) {
				resultado = numero1 + numero2;
				if (resultado > 10) {
					mensaje = "la suma es " + resultado + " y supero el 10";
				} else {
					mensaje = resultado;
				}
			}
		}
	}
	alert(mensaje);


}
