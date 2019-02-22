function mostrar() {

	var respuesta;
	var numero;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var sumaPositivos;
	var sumaNegativos;
	var promedioNegativos;
	var promedioNegativos;
	var DiferenciaNegPos;
	respuesta = 's';
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	sumaPositivos = 0;
	sumaNegativos = 0;

	while (respuesta == 's') {
		numero = prompt("ingrese el numero");
		numero = parseInt(numero);
		if (numero > 0) { // es positivo
			contadorPositivos = contadorPositivos + 1;
			sumaPositivos = sumaPositivos + numero;
		} else {
			if (numero < 0) { // es negativo
				contadorNegativos = contadorNegativos + 1;
				sumaNegativos = sumaNegativos + numero;
			} else { // es cero
				contadorCeros = contadorCeros + 1;
			}
		}
		if (!(numero % 2)) { // es par
			contadorPares = contadorPares + 1;
		}

		promedioNegativos = sumaPositivos / contadorPositivos;
		promedioPositivos = sumaNegativos / contadorNegativos;
		DiferenciaNegPos = sumaPositivos + sumaNegativos
		respuesta = prompt("ingrese 's' para continuar");
	}
	/* console.log("1 sumaNegativos " + sumaNegativos);
	console.log("2 sumaPositivos " + sumaPositivos);
	console.log("3 contadorPositivos " + contadorPositivos);
	console.log("4 contadorNegativos " + contadorNegativos);
	console.log("5 contadorCeros " + contadorCeros);
	console.log("6 contadorPares " + contadorPares);
	console.log("7 promedioPositivos " + promedioPositivos);
	console.log("8 promedioNegativos " + promedioNegativos);
	console.log("9 DiferenciaNegPos " + DiferenciaNegPos); */

	document.write(
		"1 sumaNegativos " + sumaNegativos + "<br>" +
		"2 sumaPositivos " + sumaPositivos + "<br>" +
		"3 contadorPositivos " + contadorPositivos + "<br>" +
		"4 contadorNegativos " + contadorNegativos + "<br>" +
		"5 contadorCeros " + contadorCeros + "<br>" +
		"6 contadorPares " + contadorPares + "<br>" +
		"7 promedioPositivos " + promedioPositivos + "<br>" +
		"8 promedioNegativos " + promedioNegativos + "<br>" +
		"9 DiferenciaNegPos " + DiferenciaNegPos + "<br>"
	);

}//FIN DE LA FUNCIÓN
