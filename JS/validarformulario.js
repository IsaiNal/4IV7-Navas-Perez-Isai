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


    /*
    Vamos a crear una opcion para que solo se pueda ingresar
    letras dentro del campo nombre
    */

    var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
    + "qwertyuiopasdfghjklñzxcvbnm";

    var checkStr = formulario.nombre.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
        break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }

    if(!allvalid){
        alert("Escribe solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;   
    }



    /*
    vamos a validar la entrada de números
    */

    var checkOK = "1234567890";

    var checkStr = formulario.edad.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
        break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }

    if(!allvalid){
        alert("Escribe solo numeros en el campo números");
        formulario.nombre.focus();
        return false;   
    }

    /*
    hay que validar la entrada de un correo electrónico
    algo@algo.algo
    algo_algo@algo.algo
    algo_algo@algo.algo
    tenemos que hacer uso de una expresión regular
     */

    var txt = forumulario.email.value;

    //patron
    var b = /^[@\s]+@[^@\.s]+(\.[^@\.\s]+)+$/;

    alert("Email " + (b.test(txt)?"":" no ")+" valido");

    return b.test(txt);
}