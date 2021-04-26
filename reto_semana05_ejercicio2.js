// Desarrolle el siguiente algoritmo:
// “El náufrago satisfecho” ofrece
// hamburguesas sencillas, dobles y triples,las
// cuales tienen un costo de $20.00, $25.00 y
// $28.00 respectivamente. La empresa acepta
// tarjetas de crédito con un cargo de 5 % sobre
// la compra.
// Suponiendo que los clientes adquieren sólo
// un tipo de hamburguesa, realice un algoritmo
// para determinar cuánto debe pagar una
// persona por N hamburguesas.

let tipos_de_Hamburguesa = [
    [
        "Simple",
        20
    ],
    [
        "Doble",
        25
    ],
    [
        "Triple",
        28
    ]
]
//Seleccione tipo de hamburguesa
tipo_de_Hamburguesa = +prompt("Seleccione tipo de hamburguesa: \n1. Simple\n2. Doble\n3. Triple");

precio_de_Hamburguesa = tipos_de_Hamburguesa[tipo_de_Hamburguesa-1][1]

cantidadDeHamburguesas = +prompt("Ingrese la cantidad de hamburguesas:");

costoTotal = precio_de_Hamburguesa * cantidadDeHamburguesas;

tipo_de_Pago = +prompt("Seleccione tipo de pago: \n1. Efectivo\n2. Tarjeta") ;
if(tipo_de_Pago === 2){
    costoTotalPago = costoTotal *1.05;
}else if(tipo_de_Pago ===1) {
    costoTotalPago = costoTotal;
}else{
    alert("No es un metodo de pago válido");
}

alert(`Usted debe cancelar ${costoTotalPago} soles`);