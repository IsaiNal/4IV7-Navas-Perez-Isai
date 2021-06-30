/*

vamos a crear una función que se encargue de validar 
que el usuario deba de escribir más de 5 caracteres
en el campo nombre
*/

function validar(formulario){
    //obtener los valores del formulario
    if(formulario.nombre.value.length <5){
        alert("Escribe más de 5 caracteres en el campo nombre")
        formulario.nombre.focus();
    return false;
    }
}