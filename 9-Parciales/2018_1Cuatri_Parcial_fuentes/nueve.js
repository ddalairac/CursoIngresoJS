function mostrar()
{
	var marca = new Array();
	var peso = new Array();
	var temperatura = new Array();
	var continuar;

	marca = ["fiat","nike","absolute"];
	peso = [3,99,29];
	temperatura = [-12,0,23];
	/* continuar = true
	while(continuar){
		marca.push(prompt("Marca del producto"));
		peso.push(pesoValidado());
		temperatura.push(temperaturaValidado());
		continuar = confirm("Ingresar otro producto")
	} */
	console.log("marca "+marca);
	console.log("peso "+peso);
	console.log("temperatura "+temperatura);

	var indexProductoMasPesado;
	var totalTempPar;
	var productoMasPesado;
	var productoDeMenosDeCeroGrados;
	var promedioPesoProductos;
	var pesoMaximo;
	var pesoMinimo;

	totalTempPar = calcularTotalTempPar(temperatura);
	indexProductoMasPesado = calcProductoMasPesado(peso);
	productoMasPesado = marca[indexProductoMasPesado];
	productoDeMenosDeCeroGrados = calcProductoDeMenosDeCeroGrados(temperatura);
	promedioPesoProductos = calcPromedioPesoProductos(peso);
	pesoMaximo = calcPesoMaximo(peso);
	pesoMinimo = calcPesoMinimo(peso);

/* 	
	console.log("total Temperaturas Par: "+totalTempPar);
	console.log("producto Mas Pesado: "+productoMasPesado);
	console.log("productos De Menos De CeroGrados: "+productoDeMenosDeCeroGrados);
	console.log("promedioPesoProductos: "+promedioPesoProductos);
	console.log("pesoMaximo: "+pesoMaximo);
	console.log("pesoMinimo: "+pesoMinimo); 
	*/
	var resultados
	resultados = 	"total Temperaturas Par: "+totalTempPar+"<br>"+
								"producto Mas Pesado: "+productoMasPesado+"<br>"+
								"productos De Menos De CeroGrados: "+productoDeMenosDeCeroGrados+"<br>"+
								"promedioPesoProductos: "+promedioPesoProductos+"<br>"+
								"pesoMaximo: "+pesoMaximo+"<br>"+
								"pesoMinimo: "+pesoMinimo;

	document.write (resultados);






}
function pesoValidado(){
	var peso;
	peso = prompt("Peso del producto (número entre 1 y 100 )");
	peso = parseInt(peso);
	if(peso >= 1 && peso <= 100){
		return peso;
	} else {
		return pesoValidado();
	}
}
function temperaturaValidado(){
	var temperatura;
	temperatura = prompt("temperatura del producto (número entre -30 y 30 )");
	temperatura = parseInt(temperatura);
	if(temperatura >= -30 && temperatura <= 30){
		return temperatura;
	} else {
		return temperaturaValidado();
	}
}
function calcularTotalTempPar(temperatura){
	var cantPares;
	var resto
	cantPares = 0
	for(i=0;i<temperatura.length;i++){
		resto = temperatura[i] % 2;
		if(resto == 0 && temperatura[i] != 0){
			cantPares++
		}
	}
	return cantPares;
}
function calcProductoMasPesado(peso){
	var masPesado;
	var indexDelMasPesado;
	masPesado = peso[0];
	for(i=0;i<peso.length;i++){
		if(masPesado < peso[i] ){
			masPesado = peso[i];
			indexDelMasPesado = i;

			for(e=0;e<peso.length;e++){
				if(masPesado < peso[e] ){
					//masPesado = peso[e];
					indexDelMasPesado = e;
				}
			}
		}
	}
	return indexDelMasPesado;
}
function calcProductoDeMenosDeCeroGrados(temperatura){
	var prodBajoCero;
	prodBajoCero = 0
	for(i=0;i<temperatura.length;i++){
		if(temperatura[i] < 0){
			prodBajoCero++
		}
	}
	return prodBajoCero;
}
function calcPromedioPesoProductos(peso){
	var promedio;
	var suma;
	suma = 0
	promedio = 0
	for(i=0;i<peso.length;i++){
		suma += peso[i];
	}
	promedio = suma / peso.length;
	promedio = promedio.toFixed(2);
	return promedio;
}
function calcPesoMaximo(peso){
	var masPesado;
	masPesado = peso[0];
	for(i=0;i<peso.length;i++){
		if(masPesado < peso[i] ){
			masPesado = peso[i];

			for(e=0;e<peso.length;e++){
				if(masPesado < peso[e] ){
					masPesado = peso[e];
				}
			}
		}
	}
	return masPesado;
}
function calcPesoMinimo(peso){
	var menosPesado;
	menosPesado = peso[0];
	for(i=0;i<peso.length;i++){
		if(menosPesado > peso[i] ){
			menosPesado = peso[i];

			for(e=0;e<peso.length;e++){
				if(menosPesado > peso[e] ){
					menosPesado = peso[e];
				}
			}
		}
	}
	return menosPesado;
}
/* Bienvenidos. 
Realizar el algoritmo que permita ingresar 
  - la marca del producto, 
  - el peso el cual debe ser entre 1 y 100 (validar), 
	- la temperatura de almacenamiento(entre -30 y 30) 
	hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo. */