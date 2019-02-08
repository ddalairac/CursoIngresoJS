/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var num1;
	var num2;
	var resultado;
	num1 = parseInt(numeroUno.value);
	num2 = parseInt(numeroDos.value);
	resultado = num1 + num2;
	//alert(resultado);
	alert(+num1+" + "+num2+" = "+resultado);
}

