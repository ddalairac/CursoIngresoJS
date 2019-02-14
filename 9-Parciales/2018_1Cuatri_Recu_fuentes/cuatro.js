function mostrar()
{

	var amigos = new Array;
	var noHayMasAmigos;
	var propina;
	var iva;
	var totalSinAdicionales;
	var montoIva;
	var montoPropina;
	var total

	propina = 10;
	iva = 21;
	noHayMasAmigos = false;
	//amigos = [5,2,9];
	while(!noHayMasAmigos){
		var nuevaComida
		nuevaComida = prompt("Ingrese el valor de su comida");
		nuevaComida=parseInt(nuevaComida);

		if(isNaN(nuevaComida)){
			alert("Ingrese un monto Valido");
		} else {
			amigos.push(nuevaComida);
			noHayMasAmigos = confirm("Es el ultimo amigo?");
		}
	}
	totalSinAdicionales = 0;

	for(i=0;i<amigos.length;i++){
		totalSinAdicionales += amigos[i];
	}

	montoPropina = totalSinAdicionales * propina/100;
	montoIva = totalSinAdicionales * iva/100;
	total = totalSinAdicionales + montoPropina + montoIva;


	alert("El total a pagar es de $"+total+". el total de los platos es de $"+totalSinAdicionales
		+" mas $"+montoPropina+" de propina y $"+montoIva+" de iva");

}
/*
Cuanto paga cada amigo
total
agregar 10% propipa
agregar iva
*/