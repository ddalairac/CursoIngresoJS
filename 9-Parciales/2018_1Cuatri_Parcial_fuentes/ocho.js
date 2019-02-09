function mostrar() {
	var numerosIngresados = new Array();
	var letrasIngresadas = new Array();
	var continuar
/* 
	numerosIngresados=[3,5,6,7,-4,-37,-6,2,34,29,99,-7,0];
	letrasIngresadas=["m", "c", "m", "f", "d","R", "R", "R", "f", "h", "d","R"]; 
	 */
	continuar = true
	while (continuar) {
		letrasIngresadas.push(prompt("Ingrese una letra"));
		numerosIngresados.push(validarNumero());
		continuar = confirm("Ingresar mas datos");
	}
	//console.log(numerosIngresados);
	//console.log(letrasIngresadas);

	var totalNumerosPares
	var totalNumerosImpares
	var totalDeCeros
	var totalPromedioDePositivos
	var totalSumaDeNegativos
	var indexNumeroMaximo
	var indexNumeroMinimo
	var NumeroYleraMinimo
	var NumeroYleraMaximo

	totalNumerosPares = "La cantidad de números pares: " + cantidadNumerosPares(numerosIngresados) + "<br>";
	totalNumerosImpares = "La cantidad de números impares: " + cantidadNumerosImpares(numerosIngresados) + "<br>";
	totalDeCeros = "La cantidad de ceros: " + cantidadCeros(numerosIngresados) + "<br>";
	totalPromedioDePositivos = "El promedio de números positivos: " + promedioDePositivos(numerosIngresados) + "<br>";
	totalSumaDeNegativos = "El total de la suma de negativos: " + sumaDeNegativos(numerosIngresados) + "<br>";
	indexNumeroMinimo = buscarIndexNumeroMasBajo(numerosIngresados);
	NumeroYleraMinimo = "El número mas bajo es: " + numerosIngresados[indexNumeroMinimo] + ", corresponde con la letra " + letrasIngresadas[indexNumeroMinimo] + "<br>";
	indexNumeroMaximo = buscarIndexNumeroMasAlto(numerosIngresados);
	NumeroYleraMaximo = "El número mas alto es: " + numerosIngresados[indexNumeroMaximo] + ", corresponde con la letra " + letrasIngresadas[indexNumeroMaximo] + "<br>";

	console.log(totalNumerosPares)
	console.log(totalNumerosImpares)
	console.log(totalDeCeros)
	console.log(totalPromedioDePositivos)
	console.log(totalSumaDeNegativos)
	console.log(NumeroYleraMinimo)
	console.log(NumeroYleraMaximo)

	document.write(
		totalNumerosPares +
		totalNumerosImpares +
		totalDeCeros +
		totalPromedioDePositivos +
		totalSumaDeNegativos +
		NumeroYleraMinimo +
		NumeroYleraMaximo
	);

}

function validarNumero() {
	var numero
	numero = prompt("Ingrese un número entre -100 y 100");
	numero = parseInt(numero);
	if (numero > -100 && numero < 100) {
		return numero
	} else {
		alert("Ingreso un numero no válido");
		return validarNumero();
	}
}
function cantidadNumerosPares(numerosIngresados) {
	var cantidadNumerosPares;
	var resto;
	cantidadNumerosPares = 0;

	for (i = 0; i < numerosIngresados.length; i++) {
		resto = numerosIngresados[i] % 2;
		if (resto == 0) {
			cantidadNumerosPares++
		}
	}
	return cantidadNumerosPares;
}
function cantidadNumerosImpares(numerosIngresados) {
	var cantidadNumerosImpares;
	var resto;
	cantidadNumerosImpares = 0;

	for (i = 0; i < numerosIngresados.length; i++) {
		resto = numerosIngresados[i] % 2;
		if (resto != 0) {
			cantidadNumerosImpares++
		}
	}
	return cantidadNumerosImpares;
}
function cantidadCeros(numerosIngresados) {
	var cantidadCeros;
	cantidadCeros = 0;

	for (i = 0; i < numerosIngresados.length; i++) {
		if (numerosIngresados[i] == 0) {
			cantidadCeros++
		}
	}
	return cantidadCeros;

}
function promedioDePositivos(numerosIngresados) {
	var totalPositivos;
	var cantidadPositivos
	var promedio
	totalPositivos = 0;
	cantidadPositivos = 0;

	for (i = 0; i < numerosIngresados.length; i++) {
		if (numerosIngresados[i] > 0) {
			totalPositivos += numerosIngresados[i];
			cantidadPositivos++
		}
	}
	promedio = totalPositivos / cantidadPositivos
	promedio = promedio.toFixed(2)
	return promedio;

}
function sumaDeNegativos(numerosIngresados) {
	var cantidadPositivos;
	cantidadPositivos = 0;

	for (i = 0; i < numerosIngresados.length; i++) {
		if (numerosIngresados[i] < 0) {
			cantidadPositivos += numerosIngresados[i];
		}
	}
	return cantidadPositivos;

}
function buscarIndexNumeroMasBajo(numerosIngresados) {
	var numMasBajo;
	var index
	numMasBajo = numerosIngresados[0];
	for (i = 0; i < numerosIngresados.length; i++) {
		if (numerosIngresados[i] < numMasBajo) {
			numMasBajo = numerosIngresados[i]
			index = i
		}
		for (e = 0; e < numerosIngresados.length; e++) {
			if (numerosIngresados[i] < numerosIngresados[e]) {
				if (numMasBajo > numerosIngresados[i]) {
					numMasBajo = numerosIngresados[i];
					index = i
				}

			}
		}
	}
	return index;
}
function buscarIndexNumeroMasAlto(numerosIngresados) {

	var numMasAlto;
	var index
	numMasAlto = numerosIngresados[0];
	for (i = 0; i < numerosIngresados.length; i++) {
		if (numerosIngresados[i] > numMasAlto) {
			numMasAlto = numerosIngresados[i]
			index = i
		}
		for (e = 0; e < numerosIngresados.length; e++) {
			if (numerosIngresados[i] > numerosIngresados[e]) {
				if (numMasAlto < numerosIngresados[i]) {
					numMasAlto = numerosIngresados[i];
					index = i
				}

			}
		}
	}
	console.log("numMasAlto " + numMasAlto)
	return index;
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
