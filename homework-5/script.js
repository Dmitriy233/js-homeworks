const LOGIN = "ADMIN";
const PASSWORD = "1q2w3e";

let authorization = () => {

    for (i = 3; i >= 0; i--) {
         if (i === 0){
            alert("Доступ заблокирован. Попробуйте позже.")
            break;
        };
            let userLogin = prompt("Введите логин ");
        if (!userLogin) {
            alert(` Введите логин\n Количество попыток: ${i-1}`);
            continue;
        };
        let userPassword = prompt("Введите пароль");
        if (!userPassword) {
            alert(` Введите пароль\n Количество попыток: ${i-1}`);
            continue;
        } else if (userLogin === LOGIN && userPassword === PASSWORD) {
            alert("Добро Пожаловать");
            break;
        } else {
            alert(` Неверный логин или пароль\n Количество попыток: ${i-1}`);
        }


    }
}
authorization();



// let firstValue = Number(prompt("Введите начальное значение"));
// let secondValue = Number(prompt("Введите конечное значение"));
// console.log(`все простые числа между ${firstValue} и ${secondValue} `);
// nextIteration:
// for (let i = firstValue; i <= secondValue; i++) {
//     if(i === 1) continue nextIteration;
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//         continue nextIteration;       
//         }
//     }
//     console.log(i);
// }