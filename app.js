"user strict";

const agregarTareaBTN = document.querySelector(".add-task-submit");
const contenedorTareas = document.querySelector(".contenedor-de-tasks");
const formularioTexto = document.querySelector(".add-task-text");
const tareasRestantes = document.getElementById("pending");

let contadorDeID = 0;

agregarTareaBTN.addEventListener("click", (e) => {
  contadorDeID++;

  crearElemento();

  actualizarElementos();
});

const crearElemento = () => {
  const NewTareaText = formularioTexto.value;

  if (formularioTexto.value.length > 0) {
    let tarea = document.createElement("DIV");
    tarea.classList.add("task");
    tarea.classList.add("flex");
    tarea.id = `${contadorDeID}`;

    let img = document.createElement("IMG");
    img.src = "icon/trash-outline.svg";
    tarea.appendChild(img);

    let label = document.createElement("LABEL");
    label.classList.add("flex");
    tarea.appendChild(label);

    let input = document.createElement("INPUT");
    input.type = "checkbox";
    label.appendChild(input);

    let span = document.createElement("SPAN");
    span.textContent = `${NewTareaText}`;
    label.appendChild(span);

    contenedorTareas.appendChild(tarea);

    formularioTexto.value = "";
  } else {
    alert("No puede agregar tareas sin nombre 😠");
  }
};

const actualizarElementos = () => {
  let elementosTotales = contenedorTareas.querySelectorAll("DIV");
  let checkboxsMarcados = contenedorTareas.querySelectorAll('input[type="checkbox"]:checked');

  pending.textContent = `${elementosTotales.length - checkboxsMarcados.length}`;
};

const eliminarElemento = (id) => {
  let eliminarPorID = document.getElementById(id);
  contenedorTareas.removeChild(eliminarPorID);
  actualizarElementos();
};

contenedorTareas.addEventListener("click", (evento) => {
  if (evento.target.nodeName === "INPUT") {
    actualizarElementos();
  } else if (evento.target.nodeName === "IMG") {
    eliminarElemento(evento.target.parentNode.id);
  }
});
