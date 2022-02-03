/*
----------SIMULADOR DE TURNOS-----------
*/
//Primero pedimos declaramos un array vacio
const listaUsuarios = [];

//Luego indicamos el limite de turnos
let turnos = 15;

/*En un bucle do while pedimos que se ingrese
el nombre de usuario que ira dentro del array*/
do{
    let entrada = prompt("Igrese su nombre de usuario: ");
    listaUsuarios.push(entrada.toUpperCase());
    console.log(listaUsuarios.length);
    // Se cuenta la cant de valores que hay dentro del array
}while(listaUsuarios.length <= turnos){
    alert("Lo sentimos, ya no hay mas turnos disponibles.");
    /*Y cuando el array llega al limiteindicado
    en la variable "turnos" el bucle termina
    con un mensaje de alert en el que se indica 
    que ya no hay mas turnos disponibles */
}