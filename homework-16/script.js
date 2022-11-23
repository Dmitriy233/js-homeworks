

// Вашей задачей будет реализовать функционал приветсвия пользователя на сайте c помощью localStorage.

// При первом входе на сайт просто показывать на экране приветствие Дооро пожаловать!
// Если пользователь уже заходил на сайт (при первом визите), то к базовому приветсвию следует добавить строку Вы заходили раз: N. Где вместо N будет количесво посещений сайта пользователем. Обратите внимание, что первый визит так же считается.
// Функционал должен работать при закрытии вкладки или бразура, обновлении страницы.



  const creatingGreetings = () => {
    const titleGreeting = document.createElement('h1');
 localStorage.setItem("titleGreeting", "Добро пожаловать!");  

 titleGreeting.innerHTML = localStorage.getItem("titleGreeting");

const counterInfo = document.createElement('h2');
    let numberVisits = localStorage.getItem('on_load_counter');

      createCounterVisited(counterInfo, numberVisits)

document.body.append(titleGreeting,counterInfo)

  }

  const createCounterVisited = (counterInfo, numberVisits) => {
    if (numberVisits === null) {
        numberVisits = 0;  
    } 
    numberVisits++;
    localStorage.setItem("on_load_counter", numberVisits);
    
    if(numberVisits > 1){
        counterInfo.innerHTML = "Вы заходили раз: " + numberVisits
       
    }
    return counterInfo
  }

  creatingGreetings()