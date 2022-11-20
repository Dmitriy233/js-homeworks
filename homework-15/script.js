// // task 1

// const response = {
//     data: [
//         {
//             username: "samuel",
//             is_active: true,
//             created_at: "2020-11-20T09:53:50.000000Z",
//         },
//         {
//             username: "john",
//             is_active: false,
//             created_at: "2020-11-20T09:53:50.000000Z",
//         },
//         {
//             username: "peter",
//             is_active: false,
//             created_at: "2020-11-20T09:53:50.000000Z",
//         },
//     ],
//     meta: {
//         paging: {
//             current: 1,
//             next: 2,
//             prev: null,
//             total: 14,
//             per_page: 3,
//         },
//     },
// };

// const { meta: { paging: { total } } } = response;
// console.log(total)
// const { data: [{ is_active: isActive }] } = response;
// console.log(isActive);

// task 2

// const user = {
//     name: "gabriel",
//     surname: "brown",
//     age: 17,
//     height: 178,
// };

// const { name, surname, ...parameters } = user;
// console.log(name, surname, parameters);

// // task 3


// const max = (...numbers) => {

//     return  numbers.reduce((total,count)=> total > count ? total : count);
// };
//  console.log(max(1,212,3,5,12))

// // task 4 

// const createMessage = (config) => {
//     const {author = 'Guest', text, reciever, time = new Date()} = config;
//     return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
//   };
// const message = createMessage({
//     reciever: "John",
//     text: "Hi!",
// });
// console.log(message);


// // task 5.1
// let str = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";

// const validValue = (value) =>{
//     return value.match(/[a-z]+\d+\w+/gi)
// }
// const res = validValue(str);
// console.log(res)

 5.2

const form = document.getElementById('form')
const input = document.getElementById('domain')

const REGEX_DOMAIN = /^[a-z0-9]+([\-\.\_]+[a-z0-9]+)*\.[a-z]{2,6}$/g

const handleSubmit = (event) => {
    event.preventDefault();
    
    const {value} = input;
    if(!REGEX_DOMAIN.test(value)){
        return console.log('не валидный домен')
    }else(
      console.log('домен валидный')
    )
    
  };
form.addEventListener('submit', handleSubmit)

// // 5.3

// const numbers = '123456789129' ;
// const regexNum = /^\d{12,}$/g

//        if(!regexNum.test(numbers)){
//         console.log('error')
//        }else{
//         console.log('done')
//        }
    
    
