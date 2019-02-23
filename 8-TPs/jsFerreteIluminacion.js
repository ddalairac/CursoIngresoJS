/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var cantidad;
    var marca;
    var precio;
    var descuento;
    var incrementoIIBB;
    var montoIIBB
    var suma;
    var total;
    var mensaje;

    precio = 35;
    descuento = 1;
    incrementoIIBB = 0.1
    cantidad = document.getElementById("Cantidad").value;
    cantidad = parseInt(cantidad);
    marca = document.getElementById("Marca").value;
    suma = cantidad * precio;

    // descuentos
    if (cantidad >= 6) {
        descuento = 0.5;
    } else {
        if (cantidad == 5) {
            if (marca == "ArgentinaLuz") {
                descuento = 0.6;
            } else {
                descuento = 0.7;
            }
        } else {
            if (cantidad == 4) {
                if (marca == "ArgentinaLuz" || marca == "“FelipeLamparas”") {
                    descuento = 0.75;
                } else {
                    descuento = 0.8;
                }
            } else {
                if (cantidad == 3) {
                    if (marca == "ArgentinaLuz") {
                        descuento = 0.85;
                    } else {
                        if (marca == "“FelipeLamparas”") {
                            descuento = 0.9;
                        }
                    }
                }
            }
        }
    }

    total = suma * descuento;
    
    // impuestos
    if(total > 120){
        montoIIBB = total * incrementoIIBB;
        mensaje = "Usted pago "+montoIIBB+" de IIBB.”, siendo "+incrementoIIBB+" el impuesto que se pagó. "
    } else {
        mensaje = "Usted pago "+total;
    }
    //console.log(mensaje);
    document.getElementById("precioDescuento").value = mensaje;
}
