
function mostrar()
{
	var mascota1
	var mascota2
	var peso1;
	var peso2;
	var pesoTotal;
	mascota1 = prompt("Ingrese el nombre de la mascota 1");
	mascota2 = prompt("Ingrese el nombre de la mascota 2");
	peso1 = prompt("Ingrese el peso de la mascota 1");
	peso2 = prompt("Ingrese el peso de la mascota 2");
	
	peso1=parseInt(peso1);
	peso2=parseInt(peso2);

	pesoTotal = peso1 + peso2;
	alert("tenes dos mascotas "+mascota1+" y "+mascota2+", que pesan "+peso1+" y "+peso2+" kilos, la suma de los kilos es "+pesoTotal);

}