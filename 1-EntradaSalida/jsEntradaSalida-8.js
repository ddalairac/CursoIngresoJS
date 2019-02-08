/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1;
	var num2;
	var resultado;
	var resto;
	num1 = parseInt(numeroDividendo.value);
	num2 = parseInt(numeroDivisor.value);
	if(num1 && num2){
	 	resultado = num1 / num2; 
 		resto = num1 % num2; 
		alert("Resultado "+resultado+" - Resto "+resto);
	}
}
