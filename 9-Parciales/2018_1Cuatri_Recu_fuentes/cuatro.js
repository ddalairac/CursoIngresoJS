function mostrar()
/* 
recibir 4 precios
avisar cual es el importe mas alto
si el total es mayor a 100, hacer descuento de 10%
si es mayor a 50, 5% descuento
si es inferior a 50, PAGA 15% extra
 */ {

	var precio1;
	var precio2;
	var precio3;
	var precio4;
	var suma;
	var precioMasAlto;
	var descuento;
	var total;
	var totalDescuento;
	var mensaje;

	precio1 = prompt("Ingrese el valor total de la comida");
	precio2 = prompt("Ingrese el valor total de la comida");
	precio3 = prompt("Ingrese el valor total de la comida");
	precio4 = prompt("Ingrese el valor total de la comida");

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);
	precio4 = parseInt(precio4);

	totalDescuento = 0
	suma = precio1 + precio2 + precio3 + precio4;

	if (precio1 >= precio2 && precio1 >= precio3 && precio1 >= precio4) {
		precioMasAlto = precio1;
	} else {
		if (precio2 >= precio3 && precio2 >= precio4) {
			precioMasAlto = precio2;
		} else {
			if (precio3 >= precio4) {
				precioMasAlto = precio3;
			} else {
				precioMasAlto = precio4;
			}
		}
	}
	mensaje = "El precio mas alto es: " + precioMasAlto;
	alert(mensaje);


	if (suma > 100) {
		descuento = 10;
	} else {
		if (suma > 50) {
			descuento = 5;
		} else {
			descuento = -15;
		}
	}

	totalDescuento = suma * descuento / 100;
	total = suma - totalDescuento;
	mensaje = "total: " + total;

	alert(mensaje);
}

/* 
var propina;
	var iva;
	var totalSinAdicionales;
	var cantidadAmigos;
	var montoPorAmigo;
	var montoIva;
	var montoPropina;
	var total

	propina = 10;
	iva = 21;
	noHayMasAmigos = false;

	totalSinAdicionales = prompt("Ingrese el valor total de la comida");
	totalSinAdicionales=parseInt(totalSinAdicionales);

	cantidadAmigos = prompt("Ingrese la cantidad de amigos a dividir");
	cantidadAmigos = parseInt(cantidadAmigos);

	




	montoPropina = totalSinAdicionales * propina/100;
	montoIva = totalSinAdicionales * iva/100;
	total = totalSinAdicionales + montoPropina + montoIva;
	montoPorAmigo = total / cantidadAmigos;



	alert("El total a pagar es de $"+total+". El monto por plato es de $"+montoPorAmigo
		+". La propina es $"+montoPropina+" el iva es $"+montoIva+" de iva");
 */

/*
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
	*/