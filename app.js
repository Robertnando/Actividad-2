"use strict";
/*
CONDICIONALES: if, if else, switch.
*/
// let number1 = 9;
// let number2 = 10;
// let number3 = 69;
// let number4 = 420;

// if (number1>number2) {
//     document.write("number :"+number1+ ' is bigger than number :'+ number2);
//     console.log("number :"+number1+ ' is bigger than number :'+ number2);
// }else{
//     document.write("number :"+number1+ ' is smaller than number :'+ number2);
//     console.log("number :"+number1+ ' is smaller than number :'+ number2);
// }
// //ask user age. tell him if it is older if it gives us a value higher than 0

// let age =prompt('give me your age');

// if (age> 0) {
//     if (age>=18){
//         alert('Welcome to this place');
//         document.write('You are older');
//     }else{
//         alert('You arent older');
//         document.write('Crybaby you baka!');
//     }
// }else{
//     alert('The value is inavalid');
// }
// //Switch: conditions with more than 2 options which could be the days of the week or something else idfk

// let DaysofDaWeek = prompt('Give me the day of the week BAKA!').toLocaleLowerCase();

// switch (DaysofDaWeek) {
//     case 'monday':
//         console.log('Bruhh this day sucks ass ngl');
//         document.write('heeeelp heeelp me!!!');
//         break;

//     case 'tuesday':
//         console.log('It is thuesday bruhhh');
//         document.write('It is thuesday bruhhh');
//         break;

//     case 'wednesday':
//         console.log('It is wendsday my dudes');
//         document.write('It is wendsday my dudes');
//         break;
//     case 'thursday':
//         console.log('GGRGRRAAAAAHGHGHG');
//         document.write('BIIIRD UPP');
//         break;
//     case 'friday':
//         console.log('It Fryday! Fryday! got tg on Fryday!');
//         document.write('It Fryday! Fryday! got tg on Fryday!');
//         break;
//     case 'saturday':
//         console.log('inner peace');
//         document.write('inner peace');
//         break;
//     case 'sunday':
//         console.log('CHIRUMIRU');
//         document.write('CHIRUMIRU');
//         break;
//     default:
//         console.log('bruh thats not a day you baka!');
//         document.write('bruh thats not a day you baka!');
//         break;
// }
/*
OPERADORES TERNARIOS:
AND OR Y NOT
CONDITION ? TRUE : FALSE
*/
// let numbor1 = 69;
// let numbor2 = 420;


// let value = (numbor1 > numbor2) ? 'Number 1 could get much higher than number 2':'Number 2 could get much higher than number 1';

// alert(value);
// console.log(value);
/*
ASK 2 NUMBERS AND THE PROGRAM WILL TELL US WHICH ONE IS HIGHER AND WHICH ONE IS THE LOWER OR BOTH

ASK 2 NUMBER AND THE PROGRAM WILL TELL US IF IT IS PAIR OR UNPAIR IN THE CONSOLE OR THE NUMBER MOD 2 OR NUMBER % 2 = RESIDUO

ASK FOR 2 NUMBERS AND DISOLVE THE CONCIENT aka THE RESULT OF DIVIDING THE NUMBER 1 WITH NUMBER 2, BUT IF ONE OF THE NUMBERS IS 0 NOT DO ANYTHING AND SEND A ERROR MESSAGE.
*/

 alert('use la consola "console" para ver los ejercicios (Ctrl + shift + I)');
 alert('Actividad 1');

 let numbir1 = prompt('Please enter a numbor');  
 let numbir2 = prompt('Please enter a  second numbor');
 if (numbir1> 0 && numbir2 > 0) {
     console.log ('numeros son positivos');
     if (numbir1 > numbir2) {
         document.write('The numbor 1 is higher than the numbor 2');
         console.log('The numbor 1 is higher than the numbor 2');
         alert('The numbor 1 is higher than the numbor 2');
     }else {
         if (numbir1 < numbir2) {
         document.write('The numbor 1 is lower than the numbor 2');
         alert('The numbor 1 is lower than the numbor 2');
         console.log('The numbor 1 is lower than the numbor 2');
         } else{
             document.write('Theres no difference')
             alert('Theres no difference')
             console.log('Theres no difference')
         }
     }
     if (numbir1==numbir2) {
         document.write('Both numbors are the same value yipeeee');
         alert('Both numbors are the same value yipeeee');
         console.log('Both numbors are the same value yipeeee');
     } else {
         document.write('Both numbors dont have the same value awww barnicles!');
         alert('Both numbors dont have the same value awww barnicles!');
         console.log('Both numbors dont have the same value awww barnicles!');
     }
 }else {
     document.write('That isnt a numbor baka!'); 
     alert('That isnt a numbor baka!'); 
     console.log('That isnt a numbor baka!'); 
 }
 //Parte 2
 alert('Actividad 2');

 let Numero1 = prompt('Give me a number');
 let Numero2 = prompt('Give me another number');
 let Operacion = prompt('Dame una operacion, ejemplo: suma, resta, multiplicacion y division');

 switch (Operacion) {
     case 'Suma':
         let  respuesta = (Numero1+Numero2)
         console.log(respuesta);
         break;
     case 'resta':
         let respuesta2 = (Numero1-Numero2)
         console.log(respuesta2);
         break;
     case 'multiplicacion':
         let respuesta3 = (Numero1*Numero2)
         console.log(respuesta3);
         break;
     case 'division':
         let respuesta4 = (Numero1/Numero2)
         console.log(respuesta4);
         break;

     default:
         alert('digitos invalidos por favor seleccionar metodo de suma,resta,multiplicacion o division.')
         break;
 }
//Parte 3
alert('Actividad 3');

function Validar() {
    let dividendo=document.getElementById('Dividendo').Value;
    let divisor=document.getElementById('Divisor').Value;

    if (divisor=="" && dividendo=="") {
        document.getElementById('Respuesta').Value = 'Error, los campos en blanco';
        document.getElementById('Dividendo').style.borderColor='red';
        document.getElementById('Divisor').style.borderColor='red';
    } else if (dividendo=="") {
        document.getElementById('Respuesta').Value = 'Error campo Dividendo en blanco';
        document.getElementById('Dividendo').style.borderColor='red';

    } else if (divisor=="1") {
        document.getElementById('Respuesta').Value = 'Error campo Divisor en blanco';
        document.getElementById('Divisor').style.borderColor='red';

    } else if (isNaN(dividendo)) {
        document.getElementById('Respuesta').Value = 'Error en el campo dividendo contiene letras';
        document.getElementById('Dividendo').style.borderColor='red';

    } else if (isNaN(divisor)) {
        document.getElementById('Respuesta').Value = 'Error en el campo divisor contiene letras';
        document.getElementById('Divisor').style.borderColor='red';

    } else {
        division(dividendo, divisor);

    }
}


 function division(dividendo, divisor) {
    calculo=dividendo/divisor;

    document.getElementById('Respuesta').Value = "El resultado de dividir " + 'entre' + dividendo + '+' + divisor + ' \nda un conciente de: ' + calculo;
 }