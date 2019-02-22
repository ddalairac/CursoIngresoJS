function mostrar() {
    var precioHabitacion;
    var tipoPago;
    var paquete;
    var descuento;
    var total;

    precioHabitacion = prompt("Ingrese el valor de la habitacion");
    tipoPago = prompt("Ingrese tipo de pago");
    paquete = prompt("Ingrese el codigo de paquete");
    precioHabitacion = parseInt(precioHabitacion);
    descuento = 0;
    incremento = 0;

    switch (tipoPago) {
        case "visa":
        case "mercadoPago":
            descuento = 0.1;
            break;
        case "paypal":
            switch (paquete) {
                case "todoIncluido":
                    descuento = 0.25;
                    break;
                default:
                    descuento = 0.15;
                    break;
            }
            break;
        case "efectivo":
            switch (paquete) {
                case "soloDesayunos":
                    descuento = 0.30;
                    break;
                case "todoIncluido":
                    descuento = 0.35;
                    break;
                default:
                    descuento = 0.20;
                    break;
            }
            break;
        default:
            descuento = 0.85
            break;
    }
    total = precioHabitacion * descuento + precioHabitacion;

    console.log("precioHabitacion: " + precioHabitacion);
    console.log("descuento: " + descuento);

    alert("Total:" + total);

}
