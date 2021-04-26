// Desarrolle el siguiente algoritmo:
// El consultorio del Dr. Lorenzo T. Mata Lozano
// tiene como política cobrar la consulta con base
// en el número de cita, de la siguiente forma:
// • Las tres primeras citas a $200.00 c/u.
// • Las siguientes dos citas a $150.00 c/u.
// • Las tres siguientes citas a $100.00 c/u.
// • Las restantes a $50.00 c/u, mientras dure el
// tratamiento.
// Se requiere un algoritmo para determinar:
// a) Cuánto pagará el paciente por la cita.
// b) El monto de lo que ha pagado el paciente por
// el tratamiento.
// Para la solución de este problema se requiere
// saber qué número de cita se efectuará, con el
// cual se podrá determinar el costo que tendrá la
// consulta y cuánto se ha gastado en el
// tratamiento. Con este análisis se puede
// determinar que las variables que se van a
// utilizar son las que se muestran en la tabla

numero_de_Consulta = +prompt("Ingrese el número de consulta")

if(numero_de_Consulta<=0){
    alert(`Debe ingresar un número de cita válido`)
}else{
    if(numero_de_Consulta <= 3){
        costo_de_cita = 200;
        costo_del_tratamiento = numero_de_Consulta * 200;
    }else if (numero_de_Consulta > 3 && numero_de_Consulta <=5 ){
        costo_de_cita = 150;
        costo_del_tratamiento = 600 + ((numero_de_Consulta-3)*150);
    }else if (numero_de_Consulta > 5 && numero_de_Consulta <=8 ){
        costo_de_cita = 100;
        costo_del_tratamiento = 600 + 300 + ((numero_de_Consulta-5)*100);
    }else{ 
        costo_de_cita = 50;
        costo_del_tratamiento = 600 + 300 + 300 + ((numero_de_Consulta-8)*50);
    }
    alert(`Usted pagara S/. ${costo_de_cita} por la cita actual`);
    alert(`Usted viene pagando S/. ${costo_del_tratamiento} por su tratamiento`)
}