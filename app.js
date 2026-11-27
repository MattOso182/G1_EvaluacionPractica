const productos = ["Laptop Pro", "Monitor 27 pulgadas", "Teclado Mecánico"];
const precios = [850, 220, 75];


let nombreCliente = prompt("¡Bienvenido! Por favor, ingresa tu nombre:");


if (!nombreCliente || nombreCliente.trim() === "") {
    nombreCliente = "Cliente";
}

let iniciar = confirm(`Hola ${nombreCliente}, ¿deseas iniciar una cotización?`);


while (iniciar) {
    
    let opcion = parseInt(
        prompt(
            "Selecciona el número del producto que deseas cotizar:\n" +
            `1. ${productos[0]} - $${precios[0]}\n` +
            `2. ${productos[1]} - $${precios[1]}\n` +
            `3. ${productos[2]} - $${precios[2]}`
        )
    );

    while (isNaN(opcion) || opcion < 1 || opcion > 3) {
        opcion = parseInt(
            prompt(
                "Opción no válida. Por favor, ingresa 1, 2 o 3:\n" +
                `1. ${productos[0]} - $${precios[0]}\n` +
                `2. ${productos[1]} - $${precios[1]}\n` +
                `3. ${productos[2]} - $${precios[2]}`
            )
        );
    }

    
    let cantidad = parseInt(
        prompt(`¿Cuántas unidades de "${productos[opcion - 1]}" deseas llevar?`)
    );

    while (isNaN(cantidad) || cantidad <= 0) {
        cantidad = parseInt(
            prompt("Cantidad no válida. Ingresa un número mayor a 0:")
        );
    }

    
    let productoSeleccionado = productos[opcion - 1];
    let precioUnitario = precios[opcion - 1];
    let subtotal = precioUnitario * cantidad;
    let porcentajeDescuento = 0;

    if (cantidad >= 3) {
        porcentajeDescuento = 0.15; 
    } else {
        porcentajeDescuento = 0;
    }

    let descuento = subtotal * porcentajeDescuento;
    let total = subtotal - descuento;

    
    alert(
        `--- RESUMEN DE COTIZACIÓN ---\n` +
        `Cliente: ${nombreCliente}\n` +
        `Producto: ${productoSeleccionado}\n` +
        `Cantidad: ${cantidad}\n` +
        `Subtotal: $${subtotal.toFixed(2)}\n` +
        `Descuento (${porcentajeDescuento * 100}%): -$${descuento.toFixed(2)}\n` +
        `TOTAL A PAGAR: $${total.toFixed(2)}`
    );

    
    console.log("========================================");
    console.log("DETALLE DE COTIZACIÓN");
    console.log(`Cliente: ${nombreCliente}`);
    console.log(`Ítem: ${productoSeleccionado} (x${cantidad})`);
    console.log(`Precio unitario: $${precioUnitario.toFixed(2)}`);
    console.log(`Subtotal: $${subtotal.toFixed(2)}`);
    console.log(`Descuento aplicado: $${descuento.toFixed(2)} (${porcentajeDescuento * 100}%)`);
    console.log(`Total final: $${total.toFixed(2)}`);
    console.log("========================================");

    
    iniciar = confirm("¿Deseas realizar otra cotización?");
}

alert(`¡Gracias por visitarnos, ${nombreCliente}! Hasta pronto.`);