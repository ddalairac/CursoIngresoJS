/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada 
e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
    var edad;
    var sexo;
    var estadoCivil;
    var estadoCivilMensaje;
    var sueldo;
    var legajo;
    var nacionalidad;
    var nacionalidadMensaje;

    edad = prompt("Ingrese su edad");
    edad = parseInt(edad);
    while (edad < 18 || edad > 90) {
        edad = prompt("Error, ingrese su edad");
        edad = parseInt(edad);
    }

    sexo = prompt("Ingrese su sexo");
    while (sexo != "m" && sexo != "f") {
        sexo = prompt("Error, ingrese su sexo");
    }

    estadoCivil = prompt("Ingrese su estadoCivil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
    estadoCivil = parseInt(estadoCivil);
    while (estadoCivil < 1 || estadoCivil > 4) {
        estadoCivil = prompt("Error, ingrese su estadoCivil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
        estadoCivil = parseInt(estadoCivil);
    }
    switch (estadoCivil) {
        case 1:
            estadoCivilMensaje = "soltero";
            break;
        case 2:
            estadoCivilMensaje = "casados";
            break;
        case 3:
            estadoCivilMensaje = "divorciados";
            break;
        case 4:
            estadoCivilMensaje = "viudos";
            break;
        default:
            estadoCivilMensaje = "Error, no ingreso un numero";
            break;
    }

    sueldo = prompt("Ingrese su sueldo");
    sueldo = parseInt(sueldo);
    while (sueldo < 8000) {
        sueldo = prompt("Error, ingrese su sueldo");
        sueldo = parseInt(sueldo);
    }

    legajo = prompt("Ingrese su legajo");
    legajo = parseInt(legajo);
    while (legajo < 1000 || legajo > 9999) {
        legajo = prompt("Error, ingrese su legajo");
        legajo = parseInt(legajo);
    }

    nacionalidad = prompt("Ingrese su nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
    while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N") {
        nacionalidad = prompt("Error, ingrese su nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
    }
    switch (nacionalidad) {
        case "A":
            nacionalidadMensaje = "Argentino";
            break;
        case "E":
            nacionalidadMensaje = "Extranjero";
            break;
        case "N":
            nacionalidadMensaje = "Nacionalizado";
            break;
        default:
            nacionalidadMensaje = "Error, en nacionalidad";
            break;
    }

    document.getElementById("Edad").value = edad;
    document.getElementById("Sexo").value = sexo;
    document.getElementById("EstadoCivil").value = estadoCivilMensaje;
    document.getElementById("Sueldo").value = sueldo;
    document.getElementById("Legajo").value = legajo;
    document.getElementById("Nacionalidad").value = nacionalidadMensaje;


}
