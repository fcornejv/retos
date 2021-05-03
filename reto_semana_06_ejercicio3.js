let arreglo = [];
// Declarando al elemento input
let ingreso= document.querySelector("#add");
// Declarando al elemento button
let btnAgregar = document.querySelector("#btnAdd");
// Declarando al elemento Ul
let divUl = document.querySelector("#uL");
// Declarando al elemento Li
let divLi = document.getElementsByTagName("li");

btnAgregar.addEventListener('click',function(){
    let tarea = ingreso.value;
    if(tarea === ""){
        alert("Las responsabilidades son primero")
    }else{
    // Creando elementos Li
    let li= document.createElement('li');
        li.innerHTML= tarea;
        divUl.append(li);
        
    // Guardandolo en un arreglo
        arreglo.push(tarea);
        localStorage.setItem('myElements', JSON.stringify(arreglo));
    };
});

divUl.addEventListener('click',function(evento){
    if(evento.target.tagName == 'LI'){
        evento.target.classList.toggle('checked');
    };
});