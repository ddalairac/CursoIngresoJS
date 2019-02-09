/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldoVar;
	var resultadoVar;
	sueldoVar = parseInt(sueldo.value);

	if(sueldoVar){
		resultadoVar = sueldoVar * 10/100 + sueldoVar;
		resultado.value = resultadoVar.toFixed(2); 
	}
	
}
