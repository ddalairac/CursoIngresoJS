function mostrar() {
	var contador;
	var cantidadAlumnos;
	var alumnoNota;
	var alumnoSexo;
	var totalNotas;
	var promedio;
	var notaMasBaja;
	var notaMasBajaSexo;
	var contadorSupera5;
	contador = 0;
	cantidadAlumnos = 5;
	totalNotas = 0;
	contadorSupera5 = 0;

	while (contador < cantidadAlumnos) {
		// entrada y validacion dedatos
		alumnoNota = prompt("Ingrese Nota");
		alumnoNota = parseInt(alumnoNota);
		while (alumnoNota <= 0 || alumnoNota >= 10) {
			alumnoNota = prompt("error, Ingrese Nota");
			alumnoNota = parseInt(alumnoNota);
		}



		alumnoSexo = prompt("Ingrese sexo");
		while (alumnoSexo != "f" && alumnoSexo != "m") {
			alumnoSexo = prompt("error, Ingrese sexo");
		}

		estadoCivil = prompt("Ingrese estado civil");
		while (estadoCivil != "f" && estadoCivil != "m") {
			estadoCivil = prompt("error, Ingrese estado civil");
		}

		// promedio de notas
		totalNotas = totalNotas + alumnoNota;

		// Nota mas baja
		if (contador == 0) {
			notaMasBaja = alumnoNota;
			notaMasBajaSexo = alumnoSexo;
		} else {
			if (notaMasBaja < alumnoNota) {
				notaMasBaja = alumnoNota;
				notaMasBajaSexo = alumnoSexo;
			}
		}

		// varones con nota >= 6
		if (alumnoSexo == "m" && alumnoNota >= 6) {
				contadorSupera5 = contadorSupera5 + 1;
			}
		}

		/* console.log("suma " + totalNotas);
		console.log("nota más baja y el sexo " + notaMasBaja + " " + notaMasBajaSexo);
		console.log("contadorSupera5 " + contadorSupera5); */
		contador = contador + 1;
	}
	promedio = totalNotas / cantidadAlumnos;
	alert(
		"promedio " + totalNotas +
		" nota más baja y el sexo " + notaMasBaja + " " + notaMasBajaSexo +
		" contadorSupera5 " + contadorSupera5
	)
}


/* 
Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
 */

