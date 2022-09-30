// exercise 1:

// let firstValue = Number(prompt("Введите первое число"));
// let secondValue = Number(prompt("Введите второе число"));
// if (firstValue > secondValue){
//     alert(`Число ${firstValue} больше, чем число ${secondValue}`);
// }
// else if(firstValue < secondValue){
//     alert(`Число ${firstValue} меньше, чем число ${secondValue}`);
// }
// else if( firstValue === secondValue){
//     alert("Числа равны");
// }
// else{
//     alert("Неизвестное значение. Повторите попытку.");
// }


// exercise 2:

let firstValue = Number(prompt("Введите первое число"));
let secondValue = Number(prompt("Введите второе число"));
let operation = prompt("Выберите Операцию: + - / *");
switch (operation) {
    case '+':
        alert( `${firstValue} + ${secondValue} = ${firstValue + secondValue}`);
        break;
    case '-':
        alert( `${firstValue} - ${secondValue} = ${firstValue - secondValue}`);
         break;
    case '/':
        alert( `${firstValue} / ${secondValue} = ${firstValue / secondValue}`);
        break;
    case '*':
        alert( `${firstValue} * ${secondValue} = ${firstValue * secondValue}`);
        break;
    default:
        alert("Неизвестная операция");
        break;
}


// exercise 3:

// let visitorAge = Number(prompt("Введите ваш возраст"));
// if (visitorAge >= 60 && visitorAge <= 80 || visitorAge >= 12 && visitorAge < 18) {
//     let clarification = confirm("Вам разрешили взрослые?");
//     if (clarification) {
//         alert("Вход разрешен");
//     }
//      else {
//         alert("Извине, вход запрещен");
//     }
// }
//  else if (visitorAge < 12 || visitorAge > 80) {
//     alert("Извине, вход запрещен");
// }
//  else if (visitorAge >= 18 && visitorAge < 60){
//     alert("Взрослым вход разрешен");
//  }
//  else{
//     alert("Неизвестное значение");
//  }
