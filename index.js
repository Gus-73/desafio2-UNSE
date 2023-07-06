function bienvenida(){ 
    event.preventDefault();
   let Nombre = document.getElementById('nombre').value;
   alert(`Bienvenido/a ${Nombre}!!! \n Aquí encontrarás todo lo que estás buscando.`);
}

let alerta = document.getElementById('buttonMensaje');
function enviarAlerta(alerta){ 
    event.preventDefault();
   window.alert(`Su mensaje ha sido enviado satisfactoriamente`);
}