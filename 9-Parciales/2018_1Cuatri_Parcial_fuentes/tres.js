function mostrar()
{
	var precio;
	var porcentaje;
	var montoAdescontar;
	var resultado;
	var mensaje;
	precio = prompt("Ingrese el precio");
	porcentaje = prompt("Ingrese el porcentaje de descuento");

	montoAdescontar = precio * porcentaje/100
	resultado = precio - montoAdescontar;

	mensaje = "Precio final: "+ resultado;

	elPrecioFinal.value = mensaje;
}
