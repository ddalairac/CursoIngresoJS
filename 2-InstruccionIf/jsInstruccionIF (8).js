function mostrar()
{
//tomo la edad  

	
	var age;
	var civilStatus;
	age = parseInt(edad.value);
	civilStatus = String(estadoCivil.value);
	//alert( age +civilStatus)

	if(age >= 18 && civilStatus == "Soltero"){
		alert("Es soltero y no es menor.");
	}



}//FIN DE LA FUNCIÓN