// exercise 1:

let firstValue = Number(prompt("Введите первое число"));
let secondValue = Number(prompt("Введите второе число"));
if (firstValue > secondValue){
    alert(`Число ${firstValue} больше, чем число ${secondValue}`);
}
else if(firstValue < secondValue){
    alert(`Число ${firstValue} меньше, чем число ${secondValue}`);
}
else if( firstValue === secondValue){
    alert("Числа равны");
}
else{
    alert("Неизвестное значение. Повторите попытку.");
}


// exercise 2:

// let firstValue = Number(prompt("Введите первое число"));
// let secondValue = Number(prompt("Введите второе число"));
let operation = Number(prompt("Выберите Операцию:\n 1.Суммирование\n 2.Вычитание\n 3.Деление\n 4.Умножение"));
switch (operation) {
    case 1:
        alert( `${firstValue} + ${secondValue} = ${firstValue + secondValue}`);
        break;
    case 2:
        alert( `${firstValue} - ${secondValue} = ${firstValue - secondValue}`);
         break;
    case 3:
        alert( `${firstValue} / ${secondValue} = ${firstValue / secondValue}`);
        break;
    case 4:
        alert( `${firstValue} * ${secondValue} = ${firstValue * secondValue}`);
        break;
    default:
        alert("Неизвестная операция");
        break;
}


// exercise 3:

let visitorAge = Number(prompt("Введите ваш возраст"));
if (visitorAge >= 60 && visitorAge <= 80 || visitorAge >= 12 && visitorAge < 18) {
    let clarification = Number(prompt("Вам разрешили взрослые?\n 1.Да\n 2.Нет"));
    if (clarification === 1) {
        alert("Вход разрешен");
    }
     else {
        alert("Извине, вход запрещен");
    }
}
 else if (visitorAge < 12 || visitorAge > 80) {
    alert("Извине, вход запрещен");
}
 else if (visitorAge >= 18 && visitorAge < 60){
    alert("Взрослым вход разрешен");
 }
 else{
    alert("Неизвестное значение");
 }
