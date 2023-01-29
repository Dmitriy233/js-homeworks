export { api}
export { TOKEN_KEY}
import { changeLogin } from "./Form";



const TOKEN_KEY = "token";

class ApiError extends Error {
    constructor({ message, data, status }) {
        super(message);
        this.status = status;
        this.data = data;
    }
}


class API {
    constructor() {
        this.BASE_URL = 'https://byte-tasks.herokuapp.com/api',
            this.headers = {
                "Authorization": null,
                "Content-Type": "application/json",
            }
        
    }

    // обробатываем ошибку запроса

    async handleErrors(response) {
        const { ok, status, statusText, headers } = response
       
        console.log(response)
        console.log(headers)
       
        
        if(!ok) {
            
            throw new ApiError({
                message: `Error ${statusText}`,
                data: await response.json(),
                status: status
            })
        }
        return response
    }

    // посылаем запрос на регистрацию

    async registerAuthorization(data) {
        try {
            const response = await this.handleErrors(await fetch(`${this.BASE_URL}/auth/register`, {
                body: JSON.stringify(data),
                headers: this.headers,
                method: 'POST',
            }));
            
      
            if(response.ok){
                changeLogin() 
            }

        } catch (error) {
            if(error.status === 400){

                alert('This email is already registered');
            console.log(error.message)

            } else{
                alert(error.message)
                console.log(error)


            }

        }
        
    }

    //  посылаем запрос на логин

    async loginAuthorization(data) {
        try {
            const response = await this.handleErrors(await fetch(`${this.BASE_URL}/auth/login`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(data),
            }));

            const { token } = await response.json();
            localStorage.setItem(TOKEN_KEY, token);
        this.headers.Authorization = `Bearer  ${token}`
  
        } catch (error) {
            alert(error.message)
            console.log(error)

            
        }
    }

    // получаем юзера

    
    async getSelf() {
        try {
            const response = await this.handleErrors(await fetch(`${this.BASE_URL}/auth/user/self`, {
                method: "GET",
                headers: this.headers
            }))
    
            const user = await response.json()
    
            return user
           

        } catch (error) {
           
            console.log(error.message)
            
        }
        
    }

    isLoggedIn() {
        const localToken = localStorage.getItem(TOKEN_KEY)
        this.headers.Authorization = `Bearer ${localToken}`

        return this.getSelf()
    }

    // запрос на создание таска
    async createTask(data) {
        const response = await this.handleErrors(await fetch(`${this.BASE_URL}/task`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(data)
        }))

        return await response.json()
    }

    // получаю все таски

    async getAllTask() {
        const response = await this.handleErrors(await fetch(`${this.BASE_URL}/task`, {
            method: "GET",
            headers: this.headers,
        }))
    
        return await response.json()
    }

    // изменение таска

    async editTask(id, data) {
        const response = await this.handleErrors(await fetch(`${this.BASE_URL}/task/${id}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(data)
        }))


        return await response.json()
    }

    //удаление таска
    async deleteTask(id) {
        const response = await this.handleErrors(await fetch(`${this.BASE_URL}/task/${id}`, {
            method: "DELETE",
            headers: this.headers
        }))

        return
    }

    logout() {
        localStorage.removeItem(TOKEN_KEY)
    }

    
}

const api = new API()


