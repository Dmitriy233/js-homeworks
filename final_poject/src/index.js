
import './styles/style.css';
import './components/API';
import './components/Form.js';
import './components/input';
import { Task } from './components/Task.js';
import { api, TOKEN_KEY } from './components/API';
import { formContainer, formTask,buttonLogout, changeFormAuthorization} from './components/Form.js';


export {getUserName, init, createTaskCardFromServer, renderUiForTask, buttonChangeAuthorization}
const buttonChangeAuthorization = document.getElementById('changeAuthorization')

const userName = document.querySelector('.user_name')
const nameCont = document.querySelector('.user_name')



async function getUserName (){
        await api.isLoggedIn()
        const user = await api.getSelf()
        const {name} =  user

       return userName.innerHTML = `Hi  ${name}`

    }


    function  init(){
        if( localStorage.getItem(TOKEN_KEY)){
    
                        formContainer.style.display = 'none'
                        renderUiForTask();
                        getUserName()
                       createTaskCardFromServer()
                     
                    } else{
                        formContainer.style.display = 'block'
                    }
    }
    init()
    

    async function createTaskCardFromServer() {
        api.isLoggedIn()
    
        const response = await api.getAllTask()
    
        taskContainer.innerHTML = ""
        response.forEach(card => {
            const taskCardServer = new Task(card)
            taskCardServer.createTaskCard(taskContainer)
        })
    }

    function renderUiForTask() {
        formTask.style.display = 'block'
        buttonLogout.style.display = 'block'
        nameCont.style.display = 'block'
    }

    buttonChangeAuthorization.addEventListener('click', changeFormAuthorization)
    buttonLogout.addEventListener('click', () => {
        api.logout()
        location.reload()
    })
