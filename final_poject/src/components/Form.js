
export { changeFormAuthorization, formContainer, formTask,buttonLogout}
import {formInputEmail, formInputName, formInputPassword, REGEX_PASSWORD} from "./input"

import { api, TOKEN_KEY } from "./API"

import { Task } from "./Task"

import { getUserName, init, createTaskCardFromServer, buttonChangeAuthorization} from "../index"


const formContainer = document.querySelector('.form_container')
const formAuthorization = document.getElementById('formAuthorization')
const titleForm = document.querySelector('.form_title')


const formTask = document.querySelector('.main_page')
const buttonLogout = document.getElementById('btnLogout')

const errorPassword = document.querySelector('.error_password')



function changeFormAuthorization() {

    if (buttonChangeAuthorization.innerText === 'Login') {
        buttonChangeAuthorization.innerText = 'Register';
        titleForm.innerText = 'Login'
        formInputName.style.display = 'none'


    } else if (buttonChangeAuthorization.innerText === 'Register') {

        buttonChangeAuthorization.innerText = 'Login';
        formInputName.style.display = 'block'
        titleForm.innerText = 'Register'

    }

}
export const changeLogin = () =>{
    buttonChangeAuthorization.innerText = 'Register';
        formInputName.style.display = 'none'
        titleForm.innerText = 'Login';
 }


formAuthorization.addEventListener('submit', async (event) => {
    event.preventDefault()
    const formInputData = {
        email: formInputEmail.value,
        name: formInputName.value,
        password: formInputPassword.value,
    }
    const { email, name, password } = formInputData;

  
         if(!REGEX_PASSWORD.test(password)){
            
            errorPassword.innerText = 'пароль должен быть больше 6 символов'
           
            return
         }  
         errorPassword.style.display = 'none'

    if (name === "") {
        console.log('log',name)
        await api.loginAuthorization({ email, password })
        
        init()
        createTaskCardFromServer()
        if (localStorage.getItem(TOKEN_KEY)) {

            getUserName()
        }

    } else {
        
        await api.registerAuthorization({ email, name, password }); 
        console.log('reg',name)

    formAuthorization.reset()

    }

})

formTask.addEventListener('submit', async (e) => {
    api.isLoggedIn()
    e.preventDefault()

    const taskData = {
        name: taskName.value,
        description: taskDescription.value,
    }
    const { name, description } = taskData

    if (name && description) {
        try {
            const taskInfo = await api.createTask({ name, description })
            const taskCard = new Task(taskInfo)
            taskCard.createTaskCard(taskContainer)

        } catch (err) {

            console.log(err)
        }
    } else {
        const taskInfo = await api.createTask({ name })
        const taskCard = new Task(taskInfo)
        taskCard.createTaskCard(taskContainer)
    }
    e.target.reset()
})









