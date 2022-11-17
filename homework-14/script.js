
const formConfig = [
  {
    element: "text",
    name: "login",
    label: "Логин",
  },
  {
    element: "text",
    name: "age",
    label: "Возраст",
  },
  {
    element: "select",
    name: "language",
    label: "Выберите язык программирования",
    options: [
      {
        text: "JavaScript",
        value: "js",
      },
      {
        text: "Java",
        value: "java",
      },
      {
        text: "Python",
        value: "python",
      },
    ],
  },
];


// создаем форму и дивы к инпутам
const form = document.createElement('form');
const formInputLogin = document.createElement('div');
const formInputAge = document.createElement('div');
const formSelect = document.createElement('div');

// создаем интупы селект и кнопку
const inputLogin = document.createElement('input');
const inputAge = document.createElement('input');
const inputSelect = document.createElement('select');
const selectOptionJs = document.createElement('option');
const selectOptionJava = document.createElement('option');
const selectOptionPython = document.createElement('option');
const labelLogin = document.createElement('label')
const labelAge = document.createElement('label')
const labelSelect = document.createElement('label')
const buttonSubmit = document.createElement('button');

//  создаем кнопку
buttonSubmit.innerHTML = 'Продолжить'
buttonSubmit.setAttribute('type', 'submit')


const addAttributeInForm = () => {

  // создаем варинты селекта
  selectOptionJs.innerHTML = 'JavaScript'
  selectOptionJs.setAttribute('value', 'js')
  selectOptionJava.innerHTML = 'Java'
  selectOptionJava.setAttribute('value', 'java')
  selectOptionPython.innerHTML = 'Python'
  selectOptionPython.setAttribute('value', 'python')


  //  добавляем атрибуты
  formConfig.find((config) => {
    if (config.name === 'login' && config.element === 'text') {
      inputLogin.setAttribute('type', config.element);
      inputLogin.setAttribute('name', config.name);
      labelLogin.innerHTML = config.label;
    }
    if (config.name === 'age' && config.element === 'text') {
      inputAge.setAttribute('type', config.element);
      inputAge.setAttribute('name', config.name);
      labelAge.innerHTML = config.label;

    }
    if (config.element === 'select') {
      inputAge.setAttribute('type', config.element);
      inputAge.setAttribute('name', config.name);
      labelSelect.innerHTML = config.label;

    }
  })

  //  апендим в контейнеры
  inputSelect.append(selectOptionJs, selectOptionJava, selectOptionPython)
  formSelect.append(labelSelect, inputSelect)
  formInputLogin.append(labelLogin, inputLogin)
  formInputAge.append(labelAge, inputAge)

  // апендим в форму
  form.append(formInputLogin, formInputAge, formSelect, buttonSubmit);



  return form;
};

let result = addAttributeInForm();
document.body.append(result);

//  добавляем вывод данных в консоль и убирает перезагрузку при сабмите
const handleSubmit = (event) => {
  event.preventDefault();

  const formValues = {
    login: inputLogin.value,
    age: inputAge.value,
    language: inputSelect.value,
  };
  console.log(formValues)
}

result.addEventListener('submit', handleSubmit);



