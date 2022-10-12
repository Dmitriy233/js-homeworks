let authorization = () => {
    do {
        let userName = prompt("Введите имя ");
        if (!userName) {
            alert("Введите имя");
            continue;
        };
        caseCorrection(userName);

        let surname = prompt("Введите фамилию");
        if (!surname) {
            alert("Введите фамилию");
            continue;
        };
        caseCorrection(surname);

        let password = prompt("Введите пароль");
        if (!password || password.length < 6) {
            alert("Введите пароль. Пароль должен состоять минимум из 6 символов");
            continue;
        } else if (validatePassword(password) === false) {
            alert("Введите пароль содержащий символы разного регистра.");
            continue;
        }

        alert(`Здравствуйте, ${caseCorrection(userName)} ${caseCorrection(surname)}`);
        break;

    } while (true);
}
authorization();

function caseCorrection(userName) {
    let inputToLowerCase = userName.toLowerCase();
    let firstCharToUpperCase = inputToLowerCase[0].toUpperCase();
    let result = inputToLowerCase.replace(inputToLowerCase[0], firstCharToUpperCase)
    return result;
}

function validatePassword(password) {
    let pattern = /^.*[A-Z]+.*$/;
    return pattern.test(password);
}





// let random = (min , max) => {
//     return Math.round(Math.random() * (max - min)) + min;
// }

// let value = random(10, 20);
// console.log(value);