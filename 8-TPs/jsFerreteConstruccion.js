/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var perimetro;
	var cantidadCable;
	var totalCable;	


	largoTerreno = Largo.value;
	anchoTerreno = Ancho.value;

	largoTerreno = parseInt(largoTerreno); 
	anchoTerreno = parseInt(anchoTerreno);

	cantidadCable = 3;
	perimetro = largoTerreno*2+anchoTerreno*2;
	totalCable = perimetro * cantidadCable;

	alert("Total de cable: "+totalCable);	

}
function Circulo () 
{
	var radioTerreno;
	var cantidadCable;
	var perimetro;
	var totalCable;	

	radioTerreno = Radio.value;
	radioTerreno = parseInt(radioTerreno);
	
	cantidadCable = 3;
	perimetro = Math.PI * radioTerreno * 2;
	totalCable = perimetro * cantidadCable;
	totalCable = totalCable.toFixed(2);

	alert("Total de cable: "+totalCable);	
}
function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
	var superficie;
	var cementoPormetro;
	var calPormetro;
	var totalCemento;
	var totalCal;	

	largoTerreno = Largo.value;
	anchoTerreno = Ancho.value;

	largoTerreno = parseInt(largoTerreno); 
	anchoTerreno = parseInt(anchoTerreno);

	cementoPormetro = 2;
	calPormetro = 3;
	superficie = largoTerreno * anchoTerreno;
	totalCemento = superficie * cementoPormetro;
	totalCal = superficie * calPormetro;

	alert("Total de cemento: "+totalCemento+" - Total de cal: "+totalCal);	
	
}