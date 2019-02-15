function mostrar()
{
//tomo la edad  

	var age;
	age = parseInt(edad.value);


	/*if(age > 13 && age < 17){
		alert("Es adolecente");
	} else if(age > 17){
		alert("Es mayor de edad");
	} else if(age <= 17){
		alert("Es menor de edad");
	}*/

	var age;
	age = parseInt(edad.value);
	if(age > 17){
		alert("Es mayor de edad");
	} else {
		if(age < 13){
			alert("Es menor de edad");
		} else {
			alert("Es adolecente");
		}
	}


}//FIN DE LA FUNCIÓN