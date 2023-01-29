/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://final-poject/./src/styles/style.css?");

/***/ }),

/***/ "./src/components/API.js":
/*!*******************************!*\
  !*** ./src/components/API.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TOKEN_KEY\": () => (/* binding */ TOKEN_KEY),\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ \"./src/components/Form.js\");\n\r\n\r\n;\r\n\r\n\r\n\r\nconst TOKEN_KEY = \"token\";\r\n\r\nclass ApiError extends Error {\r\n    constructor({ message, data, status }) {\r\n        super(message);\r\n        this.status = status;\r\n        this.data = data;\r\n    }\r\n}\r\n\r\n\r\nclass API {\r\n    constructor() {\r\n        this.BASE_URL = 'https://byte-tasks.herokuapp.com/api',\r\n            this.headers = {\r\n                \"Authorization\": null,\r\n                \"Content-Type\": \"application/json\",\r\n            }\r\n        \r\n    }\r\n\r\n    // обробатываем ошибку запроса\r\n\r\n    async handleErrors(response) {\r\n        const { ok, status, statusText, headers } = response\r\n       \r\n        console.log(response)\r\n        console.log(headers)\r\n       \r\n        \r\n        if(!ok) {\r\n            \r\n            throw new ApiError({\r\n                message: `Error ${statusText}`,\r\n                data: await response.json(),\r\n                status: status\r\n            })\r\n        }\r\n        return response\r\n    }\r\n\r\n    // посылаем запрос на регистрацию\r\n\r\n    async registerAuthorization(data) {\r\n        try {\r\n            const response = await this.handleErrors(await fetch(`${this.BASE_URL}/auth/register`, {\r\n                body: JSON.stringify(data),\r\n                headers: this.headers,\r\n                method: 'POST',\r\n            }));\r\n            \r\n      \r\n            if(response.ok){\r\n                (0,_Form__WEBPACK_IMPORTED_MODULE_0__.changeLogin)() \r\n            }\r\n\r\n        } catch (error) {\r\n            if(error.status === 400){\r\n\r\n                alert('This email is already registered');\r\n            console.log(error.message)\r\n\r\n            } else{\r\n                alert(error.message)\r\n                console.log(error)\r\n\r\n\r\n            }\r\n\r\n        }\r\n        \r\n    }\r\n\r\n    //  посылаем запрос на логин\r\n\r\n    async loginAuthorization(data) {\r\n        try {\r\n            const response = await this.handleErrors(await fetch(`${this.BASE_URL}/auth/login`, {\r\n                method: 'POST',\r\n                headers: this.headers,\r\n                body: JSON.stringify(data),\r\n            }));\r\n\r\n            const { token } = await response.json();\r\n            localStorage.setItem(TOKEN_KEY, token);\r\n        this.headers.Authorization = `Bearer  ${token}`\r\n  \r\n        } catch (error) {\r\n            alert(error.message)\r\n            console.log(error)\r\n\r\n            \r\n        }\r\n    }\r\n\r\n    // получаем юзера\r\n\r\n    \r\n    async getSelf() {\r\n        try {\r\n            const response = await this.handleErrors(await fetch(`${this.BASE_URL}/auth/user/self`, {\r\n                method: \"GET\",\r\n                headers: this.headers\r\n            }))\r\n    \r\n            const user = await response.json()\r\n    \r\n            return user\r\n           \r\n\r\n        } catch (error) {\r\n           \r\n            console.log(error.message)\r\n            \r\n        }\r\n        \r\n    }\r\n\r\n    isLoggedIn() {\r\n        const localToken = localStorage.getItem(TOKEN_KEY)\r\n        this.headers.Authorization = `Bearer ${localToken}`\r\n\r\n        return this.getSelf()\r\n    }\r\n\r\n    // запрос на создание таска\r\n    async createTask(data) {\r\n        const response = await this.handleErrors(await fetch(`${this.BASE_URL}/task`, {\r\n            method: \"POST\",\r\n            headers: this.headers,\r\n            body: JSON.stringify(data)\r\n        }))\r\n\r\n        return await response.json()\r\n    }\r\n\r\n    // получаю все таски\r\n\r\n    async getAllTask() {\r\n        const response = await this.handleErrors(await fetch(`${this.BASE_URL}/task`, {\r\n            method: \"GET\",\r\n            headers: this.headers,\r\n        }))\r\n    \r\n        return await response.json()\r\n    }\r\n\r\n    // изменение таска\r\n\r\n    async editTask(id, data) {\r\n        const response = await this.handleErrors(await fetch(`${this.BASE_URL}/task/${id}`, {\r\n            method: \"PATCH\",\r\n            headers: this.headers,\r\n            body: JSON.stringify(data)\r\n        }))\r\n\r\n\r\n        return await response.json()\r\n    }\r\n\r\n    //удаление таска\r\n    async deleteTask(id) {\r\n        const response = await this.handleErrors(await fetch(`${this.BASE_URL}/task/${id}`, {\r\n            method: \"DELETE\",\r\n            headers: this.headers\r\n        }))\r\n\r\n        return\r\n    }\r\n\r\n    logout() {\r\n        localStorage.removeItem(TOKEN_KEY)\r\n    }\r\n\r\n    \r\n}\r\n\r\nconst api = new API()\r\n\r\n\r\n\n\n//# sourceURL=webpack://final-poject/./src/components/API.js?");

/***/ }),

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonLogout\": () => (/* binding */ buttonLogout),\n/* harmony export */   \"changeFormAuthorization\": () => (/* binding */ changeFormAuthorization),\n/* harmony export */   \"changeLogin\": () => (/* binding */ changeLogin),\n/* harmony export */   \"formContainer\": () => (/* binding */ formContainer),\n/* harmony export */   \"formTask\": () => (/* binding */ formTask)\n/* harmony export */ });\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./src/components/input.js\");\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API */ \"./src/components/API.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/components/Task.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\r\n\r\n;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst formContainer = document.querySelector('.form_container')\r\nconst formAuthorization = document.getElementById('formAuthorization')\r\nconst titleForm = document.querySelector('.form_title')\r\n\r\n\r\nconst formTask = document.querySelector('.main_page')\r\nconst buttonLogout = document.getElementById('btnLogout')\r\n\r\nconst errorPassword = document.querySelector('.error_password')\r\n\r\n\r\n\r\nfunction changeFormAuthorization() {\r\n\r\n    if (_index__WEBPACK_IMPORTED_MODULE_3__.buttonChangeAuthorization.innerText === 'Login') {\r\n        _index__WEBPACK_IMPORTED_MODULE_3__.buttonChangeAuthorization.innerText = 'Register';\r\n        titleForm.innerText = 'Login'\r\n        _input__WEBPACK_IMPORTED_MODULE_0__.formInputName.style.display = 'none'\r\n\r\n\r\n    } else if (_index__WEBPACK_IMPORTED_MODULE_3__.buttonChangeAuthorization.innerText === 'Register') {\r\n\r\n        _index__WEBPACK_IMPORTED_MODULE_3__.buttonChangeAuthorization.innerText = 'Login';\r\n        _input__WEBPACK_IMPORTED_MODULE_0__.formInputName.style.display = 'block'\r\n        titleForm.innerText = 'Register'\r\n\r\n    }\r\n\r\n}\r\nconst changeLogin = () =>{\r\n    _index__WEBPACK_IMPORTED_MODULE_3__.buttonChangeAuthorization.innerText = 'Register';\r\n        _input__WEBPACK_IMPORTED_MODULE_0__.formInputName.style.display = 'none'\r\n        titleForm.innerText = 'Login';\r\n }\r\n\r\n\r\nformAuthorization.addEventListener('submit', async (event) => {\r\n    event.preventDefault()\r\n    const formInputData = {\r\n        email: _input__WEBPACK_IMPORTED_MODULE_0__.formInputEmail.value,\r\n        name: _input__WEBPACK_IMPORTED_MODULE_0__.formInputName.value,\r\n        password: _input__WEBPACK_IMPORTED_MODULE_0__.formInputPassword.value,\r\n    }\r\n    const { email, name, password } = formInputData;\r\n\r\n  \r\n         if(!_input__WEBPACK_IMPORTED_MODULE_0__.REGEX_PASSWORD.test(password)){\r\n            \r\n            errorPassword.innerText = 'пароль должен быть больше 6 символов'\r\n           \r\n            return\r\n         }  \r\n         errorPassword.style.display = 'none'\r\n\r\n    if (name === \"\") {\r\n        console.log('log',name)\r\n        await _API__WEBPACK_IMPORTED_MODULE_1__.api.loginAuthorization({ email, password })\r\n        \r\n        ;(0,_index__WEBPACK_IMPORTED_MODULE_3__.init)()\r\n        ;(0,_index__WEBPACK_IMPORTED_MODULE_3__.createTaskCardFromServer)()\r\n        if (localStorage.getItem(_API__WEBPACK_IMPORTED_MODULE_1__.TOKEN_KEY)) {\r\n\r\n            (0,_index__WEBPACK_IMPORTED_MODULE_3__.getUserName)()\r\n        }\r\n\r\n    } else {\r\n        \r\n        await _API__WEBPACK_IMPORTED_MODULE_1__.api.registerAuthorization({ email, name, password }); \r\n        console.log('reg',name)\r\n\r\n    formAuthorization.reset()\r\n\r\n    }\r\n\r\n})\r\n\r\nformTask.addEventListener('submit', async (e) => {\r\n    _API__WEBPACK_IMPORTED_MODULE_1__.api.isLoggedIn()\r\n    e.preventDefault()\r\n\r\n    const taskData = {\r\n        name: taskName.value,\r\n        description: taskDescription.value,\r\n    }\r\n    const { name, description } = taskData\r\n\r\n    if (name && description) {\r\n        try {\r\n            const taskInfo = await _API__WEBPACK_IMPORTED_MODULE_1__.api.createTask({ name, description })\r\n            const taskCard = new _Task__WEBPACK_IMPORTED_MODULE_2__.Task(taskInfo)\r\n            taskCard.createTaskCard(taskContainer)\r\n\r\n        } catch (err) {\r\n\r\n            console.log(err)\r\n        }\r\n    } else {\r\n        const taskInfo = await _API__WEBPACK_IMPORTED_MODULE_1__.api.createTask({ name })\r\n        const taskCard = new _Task__WEBPACK_IMPORTED_MODULE_2__.Task(taskInfo)\r\n        taskCard.createTaskCard(taskContainer)\r\n    }\r\n    e.target.reset()\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://final-poject/./src/components/Form.js?");

/***/ }),

/***/ "./src/components/Task.js":
/*!********************************!*\
  !*** ./src/components/Task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ \"./src/components/API.js\");\n\r\n\r\nlet taskContainer = document.getElementById('taskContainer')\r\n\r\nclass Task {\r\n    constructor(options) {\r\n        const { name, description, _id, timeTracked, createdAt = new Date(), isActive, isFinished } = options\r\n        \r\n        this.name = name;\r\n        this.description = description;\r\n        this.timeTracked = timeTracked;\r\n        this.createdAt = createdAt;\r\n        this.id = _id\r\n        this.isActive = isActive\r\n        this.isFinished = isFinished\r\n        \r\n        this.taskElem = document.createElement('div')\r\n        this.timerElem = document.createElement('p')\r\n        this.playElem = document.createElement('button')\r\n        this.markBtn = document.createElement('button')\r\n        this.deleteBtn = document.createElement('button')\r\n    }\r\n    \r\n    removeTask = async () => {\r\n        await _API__WEBPACK_IMPORTED_MODULE_0__.api.deleteTask(this.id)\r\n        this.taskElem.remove()\r\n    }\r\n    \r\n    \r\n    toggleTaskFinished = async () => {\r\n        this.isFinished = !this.isFinished\r\n        \r\n        await _API__WEBPACK_IMPORTED_MODULE_0__.api.editTask(this.id, {\r\n            isActive: false,\r\n            isFinished: this.isFinished,\r\n            timeTracked: 0\r\n        })\r\n        \r\n        if (this.isFinished) {\r\n            this.taskElem.classList.add('done')\r\n            this.markBtn.classList.remove('task__btn-mark')\r\n            this.markBtn.classList.add('task__btn-done')\r\n            this.markBtn.innerText = 'Restart'\r\n            \r\n            this.stopTracker()\r\n            this.playElem.setAttribute(\"disabled\", \"\")\r\n        } else {\r\n            this.taskElem.classList.remove('done')\r\n            this.markBtn.classList.add('task__btn-mark')\r\n            this.markBtn.classList.remove('task__btn-done')\r\n            this.markBtn.innerText = 'Mark as done';\r\n\r\n            this.playElem.removeAttribute(\"disabled\")\r\n        }\r\n    }\r\n    \r\n    toggleTimeTracker = async () => {\r\n        this.isActive = !this.isActive\r\n\r\n        const res = await _API__WEBPACK_IMPORTED_MODULE_0__.api.editTask(this.id, { isActive: this.isActive })\r\n        \r\n        if (this.isActive) {\r\n            this.startTracker()\r\n        } else {\r\n            this.stopTracker()\r\n        }\r\n    }\r\n    \r\n    startTracker() {\r\n        if (!this.intervalId) {\r\n            this.intervalId = setInterval(() => {\r\n                this.timeTracked += 1000\r\n                this.updateTimeTracker()\r\n                \r\n            }, 1000)\r\n        }\r\n        \r\n        this.playElem.innerText = \"| |\"\r\n        this.playElem.classList.add('pause')\r\n    }\r\n\r\n    stopTracker() {\r\n        clearInterval(this.intervalId)\r\n        this.intervalId = null\r\n        \r\n        this.playElem.innerText = \">\"\r\n        this.playElem.classList.remove('pause')\r\n    }\r\n    \r\n    updateTimeTracker() {\r\n        const formatted = Task.getFormattedTimeTracked(this.timeTracked)\r\n        this.timerElem.innerText = formatted\r\n    }\r\n    \r\n    static getFormattedDate(data) {\r\n        const unformatedData = new Date(data)\r\n        const date = unformatedData.toLocaleDateString()\r\n        const time = unformatedData.toLocaleTimeString()\r\n        \r\n        return `${date} ${time}`\r\n    }\r\n    \r\n    static addOptionalZero(num) {\r\n        return num > 9 ? num : `0${num}`\r\n    }\r\n    \r\n    static getFormattedTimeTracked(time) {\r\n        const timeTracked = Math.floor(time / 1000)\r\n        let hour = Math.floor(timeTracked / 3600);\r\n        let minute = Math.floor((timeTracked - (hour * 3600)) / 60);\r\n        let sec = timeTracked - (hour * 3600) - (minute * 60)\r\n        \r\n        let days = null\r\n        if (hour > 23) {\r\n            days = Math.floor(hour / 24);\r\n            hour -= (days * 24)\r\n        }\r\n        \r\n        let text = `${Task.addOptionalZero(hour)}:${Task.addOptionalZero(minute)}:${Task.addOptionalZero(sec)}`;\r\n        \r\n        if (days) {\r\n            text = `Дней: ${days}.   Время: ${text}`\r\n        }\r\n        \r\n        return text\r\n    }\r\n    \r\n    createTaskCard(container) {\r\n        const titleElem = document.createElement('p')\r\n        const descriptionElem = document.createElement('p')\r\n        const trackerElem = document.createElement('div')\r\n        const dayElem = document.createElement('p')\r\n        \r\n        titleElem.innerText = this.name;\r\n        descriptionElem.innerText = this.description;\r\n        this.playElem.innerText = \">\"\r\n        this.markBtn.innerText = 'Mark as done';\r\n        this.deleteBtn.innerText = 'x'\r\n        dayElem.innerText = Task.getFormattedDate(this.createdAt)\r\n        this.timerElem.innerText = Task.getFormattedTimeTracked(this.timeTracked)\r\n        \r\n        this.taskElem.classList.add('task__card')\r\n        titleElem.classList.add('task__card-title')\r\n        trackerElem.classList.add('task__tracker')\r\n        this.playElem.classList.add('task__btn-play')\r\n        this.markBtn.classList.add('task__btn')\r\n        this.deleteBtn.classList.add('task__btn-delete')\r\n        \r\n        if (this.isFinished) {\r\n            this.taskElem.classList.add('done')\r\n            this.markBtn.classList.add('task__btn-done')\r\n            this.markBtn.innerText = 'Restart'\r\n            this.playElem.setAttribute(\"disabled\", \"\")\r\n        } else {\r\n            this.markBtn.classList.add('task__btn-mark')\r\n            this.markBtn.innerText = 'Mark as done';\r\n        }\r\n        \r\n        if (this.isActive) {\r\n            this.playElem.innerText = \"| |\"\r\n            this.playElem.classList.add('pause')\r\n            this.startTracker()\r\n        } else {\r\n            this.playElem.innerText = \">\"\r\n        }\r\n        \r\n        this.deleteBtn.addEventListener('click', this.removeTask)\r\n        this.playElem.addEventListener('click', this.toggleTimeTracker)\r\n        this.markBtn.addEventListener('click', this.toggleTaskFinished)\r\n        \r\n        trackerElem.append(this.playElem, this.timerElem)\r\n        this.taskElem.append(titleElem, descriptionElem, trackerElem, dayElem, this.markBtn, this.deleteBtn)\r\n        \r\n        container.append(this.taskElem)\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://final-poject/./src/components/Task.js?");

/***/ }),

/***/ "./src/components/input.js":
/*!*********************************!*\
  !*** ./src/components/input.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"REGEX_PASSWORD\": () => (/* binding */ REGEX_PASSWORD),\n/* harmony export */   \"formInputEmail\": () => (/* binding */ formInputEmail),\n/* harmony export */   \"formInputName\": () => (/* binding */ formInputName),\n/* harmony export */   \"formInputPassword\": () => (/* binding */ formInputPassword),\n/* harmony export */   \"taskDescription\": () => (/* binding */ taskDescription),\n/* harmony export */   \"taskName\": () => (/* binding */ taskName)\n/* harmony export */ });\n\r\n\r\n\r\n\r\n\r\nconst formInputEmail = document.querySelector('.input_login');\r\nconst formInputName = document.querySelector('.input_name');\r\nconst formInputPassword = document.querySelector('.input_password');\r\n\r\nconst taskName = document.getElementById('taskName')\r\nconst taskDescription = document.getElementById('taskDescription')\r\n\r\nconst REGEX_PASSWORD = /.{6,}$/g\r\n\n\n//# sourceURL=webpack://final-poject/./src/components/input.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonChangeAuthorization\": () => (/* binding */ buttonChangeAuthorization),\n/* harmony export */   \"createTaskCardFromServer\": () => (/* binding */ createTaskCardFromServer),\n/* harmony export */   \"getUserName\": () => (/* binding */ getUserName),\n/* harmony export */   \"init\": () => (/* binding */ init),\n/* harmony export */   \"renderUiForTask\": () => (/* binding */ renderUiForTask)\n/* harmony export */ });\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _components_API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/API */ \"./src/components/API.js\");\n/* harmony import */ var _components_Form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Form.js */ \"./src/components/Form.js\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/input */ \"./src/components/input.js\");\n/* harmony import */ var _components_Task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Task.js */ \"./src/components/Task.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst buttonChangeAuthorization = document.getElementById('changeAuthorization')\r\n\r\nconst userName = document.querySelector('.user_name')\r\nconst nameCont = document.querySelector('.user_name')\r\n\r\n\r\n\r\nasync function getUserName (){\r\n        await _components_API__WEBPACK_IMPORTED_MODULE_1__.api.isLoggedIn()\r\n        const user = await _components_API__WEBPACK_IMPORTED_MODULE_1__.api.getSelf()\r\n        const {name} =  user\r\n\r\n       return userName.innerHTML = `Hi  ${name}`\r\n\r\n    }\r\n\r\n\r\n    function  init(){\r\n        if( localStorage.getItem(_components_API__WEBPACK_IMPORTED_MODULE_1__.TOKEN_KEY)){\r\n    \r\n                        _components_Form_js__WEBPACK_IMPORTED_MODULE_2__.formContainer.style.display = 'none'\r\n                        renderUiForTask();\r\n                        getUserName()\r\n                       createTaskCardFromServer()\r\n                     \r\n                    } else{\r\n                        _components_Form_js__WEBPACK_IMPORTED_MODULE_2__.formContainer.style.display = 'block'\r\n                    }\r\n    }\r\n    init()\r\n    \r\n\r\n    async function createTaskCardFromServer() {\r\n        _components_API__WEBPACK_IMPORTED_MODULE_1__.api.isLoggedIn()\r\n    \r\n        const response = await _components_API__WEBPACK_IMPORTED_MODULE_1__.api.getAllTask()\r\n    \r\n        taskContainer.innerHTML = \"\"\r\n        response.forEach(card => {\r\n            const taskCardServer = new _components_Task_js__WEBPACK_IMPORTED_MODULE_4__.Task(card)\r\n            taskCardServer.createTaskCard(taskContainer)\r\n        })\r\n    }\r\n\r\n    function renderUiForTask() {\r\n        _components_Form_js__WEBPACK_IMPORTED_MODULE_2__.formTask.style.display = 'block'\r\n        _components_Form_js__WEBPACK_IMPORTED_MODULE_2__.buttonLogout.style.display = 'block'\r\n        nameCont.style.display = 'block'\r\n    }\r\n\r\n    buttonChangeAuthorization.addEventListener('click', _components_Form_js__WEBPACK_IMPORTED_MODULE_2__.changeFormAuthorization)\r\n    _components_Form_js__WEBPACK_IMPORTED_MODULE_2__.buttonLogout.addEventListener('click', () => {\r\n        _components_API__WEBPACK_IMPORTED_MODULE_1__.api.logout()\r\n        location.reload()\r\n    })\r\n\n\n//# sourceURL=webpack://final-poject/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;