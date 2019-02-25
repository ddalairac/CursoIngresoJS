/* 
ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo. */
function mostrar() {
	//****************************
	// Definir variables
	var numero;
	var letra;

	var totalNumerosPares;
	var totalNumerosImpares;
	var totalDeCeros;
	var sumaDePositivos;
	var promedioPositivos;
	var sumaDeNegativos;
	var maximo;
	var minimo;
	var maximoLetra;
	var minimoLetra;

	var continuar;
	var contador;

	continuar = true;
	contador = 0;
	totalNumerosPares = 0;
	totalNumerosImpares = 0;
	totalDeCeros = 0;
	sumaDePositivos = 0;
	sumaDeNegativos = 0;
	promedioPositivos = 0;
	maximo = 0;
	minimo = 0;
	maximoLetra = "";
	minimoLetra = "";

	while (continuar) {
		//****************************
		// Introduccion de datos

		letra = prompt("Ingrese una letra");

		numero = prompt("Ingrese un número entre -100 y 100");
		numero = parseInt(numero);
		while (numero < -100 || numero > 100) {
			numero = prompt("Error, ingrese un número entre -100 y 100");
			numero = parseInt(numero);
		}
		continuar = confirm("Desea continuar?");


		//****************************
		// Clasificar datos

		// numero 0
		if (numero == 0) {
			totalDeCeros = totalDeCeros + 1;
		} else {
			// numero par
			if (numero % 2 == 0) {
				totalNumerosPares = totalNumerosPares + 1;
				// numero impar
			} else {
				totalNumerosImpares = totalNumerosImpares + 1;
			}

			// positivo
			if (numero > 0) {
				sumaDePositivos = sumaDePositivos + numero;
				// negativo
			} else {
				sumaDeNegativos = sumaDeNegativos + numero;
			}
		}


		// primer bucle
		if (contador == 0) {
			maximo = numero;
			minimo = numero;
			maximoLetra = letra;
			minimoLetra = letra;
		} else {
			// maximo
			if (numero > maximo) {
				maximo = numero;
				maximoLetra = letra;
			} 
			if (numero < minimo) {
				// minimo
				minimo = numero;
				minimoLetra = letra;
			}
		}
		contador = contador + 1;
	}
	promedioPositivos = sumaDePositivos / contador;
	promedioPositivos = promedioPositivos.toFixed(2);

	//****************************
	// Informe
	/* console.log("Total Numeros Pares: " + totalNumerosPares);
	console.log("Total Numeros Impares: " + totalNumerosImpares);
	console.log("Total De Ceros: " + totalDeCeros);
	console.log("Total Promedio De Positivos: " + promedioPositivos);
	console.log("Total Suma De Negativos: " + sumaDeNegativos);
	console.log("Maximo: " + maximo);
	console.log("Maximo Letra: " + maximoLetra);
	console.log("Minimo: " + minimo);
	console.log("Minimo Letra: " + minimoLetra);
	 */
	document.write(
		"Total Numeros Pares: " + totalNumerosPares + "<br>" +
		"Total Numeros Impares: " + totalNumerosImpares + "<br>" +
		"Total De Ceros: " + totalDeCeros + "<br>" +
		"Total Promedio De Positivos: " + sumaDePositivos + "<br>" +
		"Total Suma De Negativos: " + sumaDeNegativos + "<br>" +
		"Maximo: " + maximo + "<br>" +
		"Maximo Letra: " + maximoLetra + "<br>" +
		"Minimo: " + minimo + "<br>" +
		"Minimo Letra: " + minimoLetra + "<br>"
	);

}

/*
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7) */
