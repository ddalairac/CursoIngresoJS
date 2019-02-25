function mostrar() {
	var marca;
	var peso;
	var temperatura;
	var continuar;
	var contador;

	var cantidadTempPar;
	var marcaMasPesado;
	var cantidadMenosCeroGrados;
	var sumaPeso;
	var promedioPeso;
	var pesoMaximo;
	var pesoMinimo;

	continuar = true;
	contador = 0;
	cantidadTempPar = 0;
	marcaMasPesado = "";
	cantidadMenosCeroGrados = 0;
	sumaPeso = 0;
	promedioPeso = 0;
	pesoMaximo = 0;
	pesoMinimo = 0;

	while (continuar) {
		//****************************
		// Introduccion de datos

		marca = prompt("Ingrese una marca");

		peso = prompt("Ingrese un número entre 1 y 100");
		peso = parseInt(peso);
		while (peso < 1 || peso > 100) {
			peso = prompt("Error, ingrese un número entre 1 y 100");
			peso = parseInt(peso);
		}

		temperatura = prompt("Ingrese un número entre -30 y 30");
		temperatura = parseInt(temperatura);
		while (temperatura < -30 || temperatura > 30) {
			temperatura = prompt("Error, ingrese un número entre -30 y 30");
			temperatura = parseInt(temperatura);
		}

		continuar = confirm("Desea continuar?");


		//****************************
		// Clasificar datos
		// suma total para promediar
		sumaPeso = sumaPeso + peso

		// La cantidad de temperaturas pares.
		if (temperatura % 2 == 0 && temperatura != 0) {
			cantidadTempPar = cantidadTempPar + 1;
		}

		//La cantidad de productos que se conservan a menos de 0 grados.
		if (temperatura < 0) {
			cantidadMenosCeroGrados = cantidadMenosCeroGrados + 1;
		}

		// primer bucle
		if (contador == 0) {
			pesoMaximo = peso;
			pesoMinimo = peso;
			marcaMasPesado = marca;
		} else {
			// peso Maximo
			if (peso > pesoMaximo) {
				pesoMaximo = peso;
				marcaMasPesado = marca; // La marca del producto más pesado
			}
			if (peso < pesoMinimo) {
				// peso Minimo
				pesoMinimo = peso;
			}
		}

		contador = contador + 1;
	}
	//El promedio del peso de todos los productos.
	promedioPeso = sumaPeso / contador;
	promedioPeso = promedioPeso



	//****************************
	// Informe
	/* 
	console.log("contador: " + contador);
	console.log("cantidad Temp Par: " + cantidadTempPar);
	console.log("marca Mas Pesado: " + marcaMasPesado);
	console.log("cantidad Menos Cero Grados: " + cantidadMenosCeroGrados);
	console.log("suma Peso: " + sumaPeso);
	console.log("promedio Peso: " + promedioPeso);
	console.log("peso Maximo: " + pesoMaximo);
	console.log("peso Minimo: " + pesoMinimo);
 	*/
	document.write(
		"contador: " + contador + "<br>" +
		"cantidad Temp Par: " + cantidadTempPar + "<br>" +
		"marca Mas Pesado: " + marcaMasPesado + "<br>" +
		"cantidad Menos Cero Grados: " + cantidadMenosCeroGrados + "<br>" +
		"promedio Peso: " + promedioPeso + "<br>" +
		"peso Maximo: " + pesoMaximo + "<br>" +
		"peso Minimo: " + pesoMinimo + "<br>"
	);

}
/* Bienvenidos.
Realizar el algoritmo que permita ingresar
  - la marca del producto,
  - el peso el cual debe ser entre 1 y 100 (validar),
  - la temperatura de almacenamiento(entre -30 y 30)
	hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo. */