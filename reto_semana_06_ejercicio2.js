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
        alert("no ingreso una tarea")
    }else{
    let li= document.createElement('li');
        li.innerHTML= tarea;
        divUl.append(li);
        arreglo.push(tarea);
        console.log(arreglo);
    };
});

divUl.addEventListener('click',function(evento){
    if(evento.target.tagName == 'LI'){
        evento.target.classList.toggle('checked');
    };
});