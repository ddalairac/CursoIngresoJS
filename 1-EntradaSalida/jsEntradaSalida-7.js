/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

var num1;
var num2;
var resultado;

function sumar()
{	
	num1 = parseInt(numeroUno.value);
	num2 = parseInt(numeroDos.value);
	if(num1 && num2){
		resultado = num1 + num2;
		alert(+num1+" + "+num2+" = "+resultado);
	}
}

function restar()
{
	num1 = null;
	num2 = null;
	numeroUno.value = null
	numeroDos.value = null
	resultado = null;
}

function multiplicar()
{ 
	num1 = parseInt(numeroUno.value);
	num2 = parseInt(numeroDos.value);
	if(num1 && num2){
		resultado = num1 * num2;
		alert(+num1+" x "+num2+" = "+resultado);
	}
}

function dividir()
{
	
	num1 = parseInt(numeroUno.value);
	num2 = parseInt(numeroDos.value);
	if(num1 && num2){
		resultado = num1 / num2;
		alert(+num1+" / "+num2+" = "+resultado);
	}
}

