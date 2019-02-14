function mostrar()
{
  	var compra;
  	var descuento;
  	var iva
  	var montoAdescontar;
  	var precioConDescuento;
  	var precioMasIva;

	compra = prompt("Ingrese el valor de la compra");
	compra=parseInt(compra);
	iva = 21;
  	descuento = 10;
	montoAdescontar = compra * descuento/100;
	precioConDescuento = compra - montoAdescontar;
	precioMasIva = precioConDescuento * iva/100 + precioConDescuento;

	alert("Tu compra es de $"+compra+" tenes un descuento del 10% queda en $"+precioConDescuento+", mas iva es $"+precioMasIva+"")

}
