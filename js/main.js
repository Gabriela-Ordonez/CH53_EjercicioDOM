let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1"); //
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul"); // Utiliza la etiqueta del elemento

let elementos = document.getElementsByClassName("list-group-item"); // Utiliza la clase asignada a la etiqueta

let otroElemento = document.querySelector("ul>li")//Trae la primer referencia que encuentre dentro del elemento

let otrosElementos = document.querySelectorAll("ul>li"); // Trae a todos los elementos que coincidan con al etiqueta


console.log(listas.length)//2
console.log(listas[0]); //Acceder a los elementos que deseo saber con arreglo
console.log(listas.item(1));//Acceder a los elementos que deseo saber con indice

console.log("otroElemento", otroElemento);

console.log(otrosElementos.length);

console.log(elementos.item(2));
console.log(elementos.length); //10

let contador = 0;
function modifica(){
    // encabezado1.innerText = "<em>Ejercicio</em> DOM";
    encabezado1.innerHTML = "<em>Ejercicio</em> DOM"  
    encabezado2.innerText = ++contador;
}//modifica

//console.log(encabezado1.innerText);

btnMostrar.addEventListener("click", function (event){ // Agrega un escuchador de eventos
    event.preventDefault(); //No realiza lo que normalmente hace por defecto
    console.log("boton btnModificar presionado");

    let element = document.createElement("li");
    element.innerText = "Another item"; // crea otro elemento para la lista es un li con la frase Another item: <li>Another item</li>
    element.classList.add("list-group-item");

    let element2 = element.cloneNode(true); // Clona todo el contenido del elemento

    // listas.item(0).before(element); // inserta el elemento antes de la lista
    // listas.item(0).prepend(element2); // inserta el elemento inmediatamente despues del ul
    // listas.item(0).append(element); // inserta el elemento al final de la lista
    // listas.item(0).after(element2); // inserta el elemento despues de la lista

    // listas.item(1).insertAdjacentElement("afterbegin", element); // Inserta el elemento al principio de la lista
    // listas.item(1).insertAdjacentElement("beforeend", element2); // Inserta el elemento al final de la lista

    listas.item(1).insertAdjacentHTML("beforebegin", 
        `<li class="list-group-item">Before Begin item</li>`); 

    listas.item(1).insertAdjacentHTML("afterend", 
        `<li class="list-group-item">After End item</li>`); 
        
    listas.item(1).insertAdjacentHTML("afterbegin", 
        `<li class="list-group-item">After Begin item</li>`); 
        
    listas.item(1).insertAdjacentHTML("beforeend", 
        `<li class="list-group-item">Before End item</li>`); 
}); 
    