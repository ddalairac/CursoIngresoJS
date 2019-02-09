/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;

	precio1 = PrecioUno.value;
	precio2 = PrecioDos.value;
	precio3 = PrecioTres.value;

	precio1 = parseInt(precio1); 
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	suma = precio1+precio2+precio3;

	alert("Suma: "+suma);	
	
}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var promedio;

	precio1 = PrecioUno.value;
	precio2 = PrecioDos.value;
	precio3 = PrecioTres.value;

	precio1 = parseInt(precio1); 
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	promedio = (precio1+precio2+precio3)/3;
	
	alert("Promedio: "+promedio);	
	
}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var precioFinal;

	precio1 = PrecioUno.value;
	precio2 = PrecioDos.value;
	precio3 = PrecioTres.value;

	precio1 = parseInt(precio1); 
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	suma = precio1+precio2+precio3;
	precioFinal = suma * 21/100 + suma;
	precioFinal = precioFinal.toFixed(2)
	
	alert("Precio Final + IVA: "+precioFinal);	
	
}