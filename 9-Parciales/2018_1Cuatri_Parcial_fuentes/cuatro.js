function mostrar()
{
	var numero1;
	var numero2;
	/* var montoAdescontar;
	var resultado;*/
	var resultado;
	var mensaje; 
	numero1 = prompt("Ingrese un número");
	numero2 = prompt("Ingrese otro número");
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	if(numero1 == numero2){
		numero1=String(numero1);
		numero2=String(numero2);
		resultado = numero1 + numero2;
		alert(resultado);
		
	} else if(numero1 > numero2){
		resultado = numero1 - numero2;
		alert(resultado);

	} else if(numero1 < numero2){
		resultado = numero1 + numero2;
		if(resultado > 10){
			alert("la suma es "+resultado+" y supero el 10");
		} else {
			alert(resultado);
		}
	}


}
