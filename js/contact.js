import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11.7.3/+esm";

const capForm = document.querySelector("#formContact");
const capName = capForm.querySelector("#name");
const capEmail = capForm.querySelector("#email");
const capAsunto = capForm.querySelector("#asunto");
const capMensaje = capForm.querySelector("#mensaje");
const capError = document.querySelector(".error");

const error = {
  vacio: "Los campos no deben estar ni comenzar en vacio",
  name: "El campo de Nombre no debe superar los 50 caracteres",
  email: "El email no es correcto",
  asunto: "El asunto no debe superar los 50 caracteres",
  mensaje: "El mensaje no debe superar los 300 caracteres",
};

const border = {
  error: "2px solid red",
  accuracy: "2px solid green",
};

const vldtSubmit = {
  name: false,
  email: false,
  asunto: false,
  mensaje: false,
};

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const isVacio = (value) => {
  return value === "" || value[0] === " " ? true : false;
};
const isLength = (value, n) => {
  return value.length > n ? true : false;
};

const isEmail = (value) => {
  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  return validEmail.test(value) ? false : true;
};

capName.onchange = (e) => {
  capError.innerText = "";
  let value = e.target.value;
  if (isVacio(value)) {
    capName.style.borderBottom = border.error;
    capError.innerText = error.vacio;
    vldtSubmit.name = false;
  } else if (isLength(value, 50)) {
    capName.style.borderBottom = border.error;
    capError.innerText = error.name;
    vldtSubmit.name = false;
  } else {
    capName.style.borderBottom = border.accuracy;
    vldtSubmit.name = true;
  }
};

capEmail.onchange = (e) => {
  capError.innerText = "";
  let value = e.target.value;
  if (isVacio(value)) {
    capEmail.style.borderBottom = border.error;
    capError.innerText = error.vacio;
    vldtSubmit.email = false;
  } else if (isEmail(value)) {
    capEmail.style.borderBottom = border.error;
    capError.innerText = error.email;
    vldtSubmit.email = false;
  } else {
    capEmail.style.borderBottom = border.accuracy;
    vldtSubmit.email = true;
  }
};

capAsunto.onchange = (e) => {
  capError.innerText = "";
  let value = e.target.value;
  if (isVacio(value)) {
    capAsunto.style.borderBottom = border.error;
    capError.innerText = error.vacio;
    vldtSubmit.asunto = false;
  } else if (isLength(value, 50)) {
    capAsunto.style.borderBottom = border.error;
    capError.innerText = error.asunto;
    vldtSubmit.asunto = false;
  } else {
    capAsunto.style.borderBottom = border.accuracy;
    vldtSubmit.asunto = true;
  }
};

capMensaje.onchange = (e) => {
  capError.innerText = "";
  let value = e.target.value;
  if (isVacio(value)) {
    capMensaje.style.borderBottom = border.error;
    capError.innerText = error.vacio;
    vldtSubmit.mensaje = false;
  } else if (isLength(value, 50)) {
    capMensaje.style.borderBottom = border.error;
    capError.innerText = error.mensaje;
    vldtSubmit.mensaje = false;
  } else {
    capMensaje.style.borderBottom = border.accuracy;
    vldtSubmit.mensaje = true;
  }
};
capForm.onsubmit = (e) => {
  e.preventDefault();
  if (
    vldtSubmit.name &&
    vldtSubmit.email &&
    vldtSubmit.asunto &&
    vldtSubmit.mensaje
  ) {
    Toast.fire({
      icon: "success",
      title: "Mensaje Enviado",
    });
  } else {
    Toast.fire({
      icon: "error",
      title: "Ocurrio un error, vuelve a intentarlo",
    });
  }
};
