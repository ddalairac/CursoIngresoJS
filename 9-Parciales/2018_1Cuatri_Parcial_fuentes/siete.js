function mostrar() {
	var cantudadAlumnos
	var notaArr = new Array();
	var sexoArr = new Array();
	var promedio;
	var peorNotaIndex;
	var peorNota
	var sexoPeorNota;
	var varonesNotaSupA5;
	cantudadAlumnos = 5;

	/* notaArr = [6, 4, 8, 2, 9]
	sexoArr = ["m", "m", "m", "f", "f",] */
	for (i = 0; i <= cantudadAlumnos; i++) {
		notaArr[i] = ingresarNotaValidada(i);
		sexoArr[i] = ingresarSexoValidado(i);
	}

	promedio = promedioDeNotas(notaArr);
	peorNotaIndex = buscarPeroNotaIndex(notaArr);
	peorNota = notaArr[peorNotaIndex];
	sexoPeorNota = sexoArr[peorNotaIndex];
	varonesNotaSupA5 = notasMayoresA5deVarones(notaArr, sexoArr)
	alert("A - El promedio de las notas es: " + promedio);
	alert("B - La nota más baja es un: " + peorNota + ", el sexo de la persona es: " + sexoPeorNota);
	alert("C - Cantidad de varones que su nota haya sido mayor o igual a 6: " + varonesNotaSupA5);
}

function ingresarNotaValidada(numAlumno) {
	var nota;
	nota = prompt("Ingrese nota del alumno número " + numAlumno);
	nota = parseInt(nota);
	if (nota > 0 && nota < 10) {
		return nota;
	} else {
		alert("Nota invalida. La nota debe ser un numero entre 1 y 10");
		ingresarNotaValidada(numAlumno);
	}
}
function ingresarSexoValidado(numAlumno) {
	var sexo;
	sexo = prompt("Ingrese sexo del alumno número " + numAlumno);
	//sexo = parseInt(sexo);
	if (sexo == "m" || sexo == "f") {
		return sexo;
	} else {
		alert("Sexo invalido. El sexo debe ser la letra 'm' o 'f'");
		ingresarSexoValidado(numAlumno);
	}
}
function promedioDeNotas(notas) {
	var todasLasNotas;
	var promedio;

	todasLasNotas = 0;
	for (i = 0; i < notas.length; i++) {
		todasLasNotas = todasLasNotas + notas[i];
	}
	promedio = todasLasNotas / notas.length;

	return promedio;
}
function buscarPeroNotaIndex(notas) {
	var notaMasBaja;
	var idAlumno
	notaMasBaja = 10;
	for (i = 0; i < notas.length; i++) {
		if (notas[i] < notaMasBaja) {
			notaMasBaja = notas[i]
			idAlumno = i
		}
		for (e = 0; e < notas.length; e++) {
			if (notas[i] < notas[e]) {
				if (notaMasBaja > notas[i]) {
					notaMasBaja = notas[i];
					idAlumno = i
				}

			}
		}
	}
	console.log("notaMasBaja: " + notaMasBaja)
	return idAlumno;
}
function notasMayoresA5deVarones(notas, sexo) {
	var totalVarones
	totalVarones = 0;
	for (i = 0; i < notas.length; i++) {
		if (sexo[i] == "m") {
			if (notas[i] > 5) {
				totalVarones++
			}
		}
	}
	return totalVarones
}
