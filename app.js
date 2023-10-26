"use strict";
/*
CONDICIONALES: if, if else, switch.
*/
let number1 = 9;
let number2 = 10;
let number3 = 69;
let number4 = 420;

if (number1>number2) {
    document.write("number :"+number1+ ' is bigger than number :'+ number2);
    console.log("number :"+number1+ ' is bigger than number :'+ number2);
}else{
    document.write("number :"+number1+ ' is smaller than number :'+ number2);
    console.log("number :"+number1+ ' is smaller than number :'+ number2);
}
//ask user age. tell him if it is older if it gives us a value higher than 0

let age =prompt('give me your age');

if (age> 0) {
    if (age>=18){
        alert('Welcome to this place');
        document.write('You are older');
    }else{
        alert('You arent older');
        document.write('Crybaby you baka!');
    }
}else{
    alert('The value is inavalid');
}
//Switch: conditions with more than 2 options which could be the days of the week or something else idfk

let DaysofDaWeek = prompt('Give me the day of the week BAKA!').toLocaleLowerCase();

switch (DaysofDaWeek) {
    case 'monday':
        console.log('Bruhh this day sucks ass ngl');
        document.write('heeeelp heeelp me!!!');
        break;

    case 'tuesday':
        console.log('It is thuesday bruhhh');
        document.write('It is thuesday bruhhh');
        break;

    case 'wednesday':
        console.log('It is wendsday my dudes');
        document.write('It is wendsday my dudes');
        break;
    case 'thursday':
        console.log('GGRGRRAAAAAHGHGHG');
        document.write('BIIIRD UPP');
        break;
    case 'friday':
        console.log('It Fryday! Fryday! got tg on Fryday!');
        document.write('It Fryday! Fryday! got tg on Fryday!');
        break;
    case 'saturday':
        console.log('inner peace');
        document.write('inner peace');
        break;
    case 'sunday':
        console.log('CHIRUMIRU');
        document.write('CHIRUMIRU');
        break;
    default:
        console.log('bruh thats not a day you baka!');
        document.write('bruh thats not a day you baka!');
        break;
}