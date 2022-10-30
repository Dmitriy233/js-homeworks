const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [{
    id: 1,
    author: "Достоевский",
    name: "Идиот",
    isReading: false
  },
  {
    id: 2,
    author: "Михаил Булгаков",
    name: "Мастер и Маргаритта",
    isReading: false
  },
  {
    id: 3,
    author: "Михаил Булгаков",
    name: "Собачье сердце",
    isReading: false
  },
  {
    id: 4,
    author: "Достоевский",
    name: "Игрок",
    isReading: false
  },
  {
    id: 5,
    author: "Денис Фонвизин",
    name: "Недоросль",
    isReading: false
  },
  {
    id: 6,
    author: "Достоевский",
    name: "Двойник",
    isReading: false
  },
  {
    id: 7,
    author: "Конан Дойль",
    name: "Перстень Тота",
    isReading: false
  },
];

function library() {
  let inputAction = prompt(`Enter your action:\nTake\nReturn\nAdd`);
  if (inputAction === null) {
    alert(`Thanks for using our library`)
  };

  inputAction = inputAction.trim().toLowerCase();

  switch (inputAction) {
    case 'take':

      takeBook();
      break;
    case 'return':
      returnBook();
      break;
    case 'add':
      addBook();
      break;

    default:
      alert('unknown action, try again')
      break;
  }
};


let takeBook = () => {
  let findBook = prompt(`how find book\nName\nAuthor`).trim().toLowerCase();
 
  switch (findBook) {
    case 'name':
      let unreadListBook = books
        .filter(book => book.isReading === false)
        .map(book => book.name)
        .join('\n');

      let inputDesiredBook = prompt(`${unreadListBook}\nСhoose a book: `).trim().toUpperCase();
      let findDesiredBook = books.find(book => book.name.toUpperCase() === inputDesiredBook || book.author.toUpperCase() === inputDesiredBook)
      if (!findDesiredBook) {
        alert(`Book not found`)

        return;
      }

      if (findDesiredBook.isReading === true) {
        alert(`The book is being read`)

        return;
      }

      findDesiredBook.isReading = true
      alert(`you chose the book ${findDesiredBook.name}, book ID ${findDesiredBook.id}`)
      console.log(books)
      break;
    case 'author':
      let inputAuthor = prompt(`enter author`).trim().toUpperCase();
    
      let unreadListBookAuthor = books
        .filter(book => book.isReading === false && book.author.toUpperCase() === inputAuthor)
        .map(book => book.name)
        .join('\n');
      var inputDesiredBookAuthor = prompt(`${unreadListBookAuthor}\nСhoose a book: `).trim().toUpperCase();
   
      let findDesiredBookForAuthor = books.find(book => book.name.toUpperCase() === inputDesiredBookAuthor)
      if (!findDesiredBookForAuthor) {
        alert(`Book not found`)

        return;
      }
      if (findDesiredBookForAuthor.isReading === true) {
        alert(`The book is being read`)

        return;
      }

      findDesiredBookForAuthor.isReading = true
      alert(`you chose the book ${findDesiredBookForAuthor.name}, book ID ${findDesiredBookForAuthor.id}`)
      break;


    default:
      break;
  }
};


let returnBook = () => {
  console.log('return');
  let returnBook = Number(prompt(`Enter book ID`));
  let findReadingBook = books.find(book => book.id === returnBook)
  if (!findReadingBook) {
    alert(`No book found with this id`)

    return;
  }
  findReadingBook.isReading = false;
  alert(`Thanks you returned the book ${findReadingBook.name}`)
  console.log(books)

};

let addBook = () => {
  let authorBook = prompt(`Enter the author you want to add`);
  let nameBook = prompt(`Enter the name book you want to add`);
   let validateNewBook = books.find(book => book.name === nameBook)
   if (validateNewBook){
    alert(` The book is already in the library`)

    return;
   }
  let newBook = {
    id: generateID(),
    author: authorBook,
    name: nameBook,
    isReading: false,
  };
  books.push(newBook)
  console.log(books)
  alert(`Thanks you added the book "${newBook.name}" by "${newBook.author}"`)

};

let generateID = () => {
  let checkID = true;
  let generateRandomID;
  do {
    generateRandomID = Math.ceil(Math.random() * 10000);
    checkID = books.find(book => book.id === generateRandomID)
  } while (checkID);

  return generateRandomID;
};
