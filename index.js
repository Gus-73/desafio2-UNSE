function bienvenida(){ 
    event.preventDefault();
   let Nombre = document.getElementById('nombre').value;
   alert(`Bienvenido/a ${Nombre}`);
}