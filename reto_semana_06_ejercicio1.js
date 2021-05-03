
let arreglo = [];

let ingresoDatos = document.getElementById("contenido");
ingresoDatos.innerHTML = `<input type="texto" id ="formulario" placeholder="Ingrese una nueva tarea">
                          <button id="btnAdd">Añadir</button>`;
// capturando al elemento input
let form = document.getElementById("formulario");
// Estilos del input
    form.style.width="300px";
    form.style.height="30px";
    form.style.padding = "10px";

 

// capturando al elemento button
let btnAgregar= document.getElementById("btnAdd");
// Estilos del input
    btnAgregar.style.background="green";
    btnAgregar.style.color="white";
    btnAgregar.style.width="50px";


    btnAgregar.addEventListener('click',function(){
        let ing = document.getElementById("formulario").value; 
        arreglo.push(ing);
        console.log(arreglo);
});