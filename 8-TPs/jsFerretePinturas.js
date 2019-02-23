/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

var temperatura;
var conversion;
function FahrenheitCentigrados() {
    temperatura = document.getElementById("Temperatura").value
    temperatura = parseInt(temperatura);
    conversion = temperatura - 32 * 5 / 9;
    conversion = conversion.toFixed(0);
    alert(temperatura + " °F = " + conversion + " °C ");


}

function CentigradosFahrenheit() {
    temperatura = document.getElementById("Temperatura").value
    temperatura = parseInt(temperatura);
    conversion = temperatura * 5 / 9 + 32;
    conversion = conversion.toFixed(0);
    alert(temperatura + " °C = " + conversion + " °F");

}
/*
°C × 9/5 + 32 = °F
°F − 32 × 5/9 = °C
 */