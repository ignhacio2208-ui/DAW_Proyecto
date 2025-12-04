window.onscroll = function() {
    console.log("Scrolling");
}





const btnEnviar = document.querySelector(".boton");
btnEnviar.addEventListener("click", function(evento) {
    console.log(evento);
    evento.preventDefault ();
    console.log("Enviando formulario");
});



// Eventos de los inputs y textArea
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
nombre.addEventListener("change", function() {
    console.log("Se esta escribiendo");
});



nombre.addEventListener("input", function(e) {
    console.log("escribiendo en tiempo real...");
    console.log(e); //para imprimir el caracter que se esta escribiendo
    console.log(e.target.value); //para imprimir el valor completo
});

function leerTexto(e) {
    console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    console.log(datos);
}   
nombre.addEventListener("input", leerTexto);    
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);   


const datos = { 
    nombre: "", 
    email: "", 
    mensaje: "" 
};

//evento mas importante del formulario submit
const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", function(e) { 
    e.preventDefault();
    //validar formulario
    const { nombre, email, mensaje } = datos;
    if (nombre === "" || email === "" || mensaje === "") {
        console.log("Todos los campos son obligatorios");
        mostrarError("Todos los campos son obligatorios");
        return; //corta la ejecucion del codigo
    }
   //se envia el formulario
    console.log("Enviando formulario");

  
    console.log(datos);
});

function mostrarError(mensaje) {
    const error =  document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("error");
    formulario.appendChild(error);
    //Eliminar la alerta despues de 0.3 segundos
    setTimeout(() => {
        error.remove();
    }, 300);
}

function mostrarOk (mensaje) { 
    const ok =  document.createElement("P");
    ok.textContent = mensaje;
    ok.classList.add("correcto");
    formulario.appendChild(ok);
    //Eliminar la alerta despues de 2 segundos
    setTimeout(() => {
        ok.remove();
    }, 2000);
}