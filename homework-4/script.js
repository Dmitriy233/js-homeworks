// function getSum(firstValue = 1, secondValue = 2) {
//     let result = firstValue + secondValue;
//     console.log(result);
// }
// getSum();
// getSum(5, -3);
// getSum(6, 10.3);


// let sum = (firstValue, secondValue) => firstValue + secondValue;
// console.log(sum(12, 10));
// console.log(sum(152, 12));
// console.log(sum(666, 666));


// function getNameAndAge() {
//     let name = prompt("Введите Имя");
//     let age = Number(prompt("Введите ваш возраст"));
//     if (age >= 30) {
//         alert(`Здравствуйте, ${name}`);
//     } else if (age !== Number) {
//         alert("Ошибка. Введитте коректное значение.")
//     } else {
//         alert(`Привет, ${name}`);
//     }
// }
// getNameAndAge()


    let exponentiation = (value, degree = 2) => value ** degree;
   console.log(exponentiation(3));
   console.log(exponentiation(10, 3));
   console.log(exponentiation(6, 5));