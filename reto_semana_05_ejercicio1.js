//Desarrolle el siguiente algoritmo:
//Un productor de leche lleva el registro de lo
//que produce en litros, pero cuando entrega le
//pagan en galones. Realice un algoritmo, y
//represéntelo en JS, que ayude al productor
//a saber cuánto recibirá por la entrega de su
//producción de un día (1 galón
//= 3.785 litros).

let litros = +prompt('digite la cantidad de litros que produce en un dia:')
let precioL = prompt('digite el precio de los litros que vende')

let cantidad_galones = litros/3.785
let dinero = precioL*cantidad_galones
alert(`lo que recibira por la entrega de leche es: ${dinero}`);
