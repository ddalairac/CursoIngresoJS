/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "resultado"*/
function mostrarAumento()
{
	var importeVar;
	var resultadoVar;
	importeVar = parseInt(importe.value);

	if(importeVar){
		resultadoVar = importeVar * 25/100 - importeVar;
		resultado.value = resultadoVar.toFixed(2); 
	}
	
}
