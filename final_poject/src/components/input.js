
export {formInputEmail, formInputName, formInputPassword, taskName, taskDescription, REGEX_PASSWORD}



const formInputEmail = document.querySelector('.input_login');
const formInputName = document.querySelector('.input_name');
const formInputPassword = document.querySelector('.input_password');

const taskName = document.getElementById('taskName')
const taskDescription = document.getElementById('taskDescription')

const REGEX_PASSWORD = /.{6,}$/g
