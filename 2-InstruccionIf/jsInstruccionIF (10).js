function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var number;
	var number = Math.floor(Math.random() * 10) + 1; 
	
	

	if (number >= 9){
		alert("Nota: "+number+" EXCELENTE");

	} else 	if (number >= 4){
		alert("Nota: "+number+" APROBÓ");

	} else 	if (number < 4){
		alert("Nota: "+number+" Vamos, la proxima se puede" );
		
	}
}//FIN DE LA FUNCIÓN