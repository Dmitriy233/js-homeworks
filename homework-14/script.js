
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
    label: "Выберите язык программирования  ",
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

const handleSubmit = (event) => {
  event.preventDefault();
  const loginValue = document.getElementById('login');
  const ageValue = document.getElementById('age');
  const selectValue = document.getElementById('language');

  const formValues = {
    login: loginValue.value,
    age: ageValue.value,
    language: selectValue.value,
  };
  console.log(formValues)
};

function createForm() {
  const form = document.createElement('form');
  const formInputLogin = document.createElement('div');
  const formInputAge = document.createElement('div');
  const formSelect = document.createElement('div');
  let button = document.createElement('button');
  button.innerText = 'Продолжить';
  button.setAttribute('type', 'submit');
  
   formConfig.forEach(config => {
    if (config.element === 'text' && config.name === 'login') {
      createInputs(formInputLogin, formInputAge);
    }
    if (config.element === 'select') {
      createSelectAndOption(formSelect);
    }

  })
  form.addEventListener('submit', handleSubmit);
  form.append(formInputLogin, formInputAge, formSelect, button);
  document.body.append(form);
}
createForm()

function createInputs(formInputLogin, formInputAge) {

  formConfig.forEach(config => {
    config.element === 'text';
  let inputs = document.createElement('input');
  let inputsLabel = document.createElement('label');

  inputs.setAttribute('type', config.element);
  inputsLabel.setAttribute('for', config.name);
  inputsLabel.innerHTML = config.label;
  inputs.setAttribute('id', config.name);

  if (config.name === 'login') {
     formInputLogin.append(inputsLabel, inputs);
  };

  if (config.name === 'age') {
     formInputAge.append(inputsLabel, inputs);
  };
  })
};

function createSelectAndOption(formSelect) {
  const findSelectElement = formConfig.find((config) => config.element === 'select');
  let languageSelect = document.createElement('select');
  let selectLabel = document.createElement('label');

  selectLabel.setAttribute('for', findSelectElement.name);
  selectLabel.innerHTML = findSelectElement.label;
  languageSelect.setAttribute('id', findSelectElement.name);
  findSelectElement.options.forEach(option => {
    option.text;
    const selectOptionJs = document.createElement('option');
    selectOptionJs.innerHTML = option.text;
    selectOptionJs.setAttribute('value', option.value);
    languageSelect.append(selectOptionJs);
  })

  return formSelect.append(selectLabel, languageSelect);
};









