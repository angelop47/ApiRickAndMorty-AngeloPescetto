function inicio(){
    document.getElementById("add_new").addEventListener("click", add_new)
}

function add_new(){
    //crear elemento
    var imagen = document.createElement("img");


    //anadir atributos
    var ruta = " ";
   
    imagen.src = ruta;

    var cont = document.getElementById("contenedor-mis-personajes");
    cont.appendChild(imagen);
 
}