function mostrar() {
    var precioHabitacion;
    var tipoPago;
    var paquete;
    var descuento;
    var incremento;
    var montoDescuento;
    var montoAumento;
    var total;

    precioHabitacion = prompt("Ingrese el valor de la habitacion");
    tipoPago = prompt("Ingrese tipo de pago");
    precioHabitacion = parseInt(precioHabitacion);
    descuento = 0;
    incremento = 0;
    montoDescuento = 0;
    montoAumento = 0;

    switch (tipoPago) {
        case "visa":
        case "mercadoPago":
            descuento = 0.1
            break
        case "paypal":
            descuento = 0.15
            break
        case "efectivo":
            descuento = 0.20
            paquete = prompt("Ingrese el codigo de paquete");
            switch (paquete) {
                case "soloDesayunos":
                    incremento = 0.1
                    break
                case "todoIncluido":
                    incremento = 0.15
                    break
            }
            break
        default:
            descuento = 0.85
    }
    montoDescuento = precioHabitacion * descuento;
    montoAumento = montoDescuento * incremento;

    total = precioHabitacion - montoDescuento + montoAumento;

    console.log("precioHabitacion: "+precioHabitacion);
    console.log("descuento: "+descuento);
    console.log("incremento: "+incremento);
    console.log("montoDescuento: "+montoDescuento);
    console.log("montoAumento: "+montoAumento);

    alert("Total:"+total);

}
