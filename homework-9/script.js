//  Задание 1

//  1.1


// let mapArray = (arr) => arr.map(number =>{
//   if (number < 0){
//     return false;
//   }
//   return true
// })

// let res = mapArray([1, 2, -10, -2, 7])
// console.log(res)


//  1.2

const users = [
  {
    name: 'Sam',
    role: 'admin',
    age: 25,
  },
  {
    name: 'Pablo',
    role: 'admin',
    age: 32,
  },
  {
    name: 'Enrico',
    role: 'client',
    age: 43,
  },
  {
    name: 'Mary',
    role: 'client',
    age: 34,
  },
  {
  name: 'Peter',
  role: 'admin',
  age: 16,
},
    {
    name: 'Katerine',
    role: 'guest',
    age: 17,
  },
]

let getUsersAdmin = (arr) => arr
.filter(person => person.age > 18 && person.role === 'admin')
.map(person => {
  return person.name;
}) 

const adultAdmins = getUsersAdmin(users);
 console.log(adultAdmins);

//  1.3


// let getAverage = (numbers) => {
//   let sum = numbers.reduce((acc, number) => acc + number, 0);
//   let length = numbers.length;
//   return sum / length;
// };
// const numbers = [1, 10, 17, 24, 45]
// console.log(getAverage(numbers))
// // console.log(Math.round(getAverage(numbers)))  //  Если результат должен быть округлён


// Задание 2


// const logger = (element, index, array) => {
//   console.log(`In array [${array}] on position ${index}: ${element}`);
// };
// let ownForEach = (array, logger) => {
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   logger(element, index, array)
// }
// }
// ownForEach([1, 2, 3], logger);




//   const increment = (number) => number + 1;
// let ownMap = (arr, increment) => {
//   let newArray = [];
//   for (const number of arr) {
//     newArray.push(increment(number));
//   };
//   return newArray;
// }
// let result =  ownMap([1, 2, 3], increment);
// console.log(result);




// const isNegative = (number) => number < 0;
// let ownFilter = (arr, isNegative) => {
//   let newArray = [];
//   for (const number of arr) {
//     if (isNegative(number)) {
//       newArray.push(number)
//     };
//   };
//   return newArray;
// };
// let result = ownFilter([-2, 4, -1], isNegative);
// console.log(result)


//  Задание 3


// const data = [
//   {
//     name: "John",
//     age: 24,
//     position: "senior",
//     isActive: false,
//   },
//   {
//     name: "Peter",
//     age: 33,
//     position: "middle",
//     isActive: false,
//   },
//   {
//     name: "Sam",
//     age: 29,
//     position: "junior",
//     isActive: true,
//   },
//   {
//     name: "Mary",
//     age: 24,
//     position: "middle",
//     isActive: false,
//   },
//   {
//     name: "Steve",
//     age: 23,
//     position: "middle",
//     isActive: true,
//   },
//   {
//     name: "Kate",
//     age: 31,
//     position: "middle",
//     isActive: false,
//   },
//   {
//     name: "Sally",
//     age: 19,
//     position: "junior",
//     isActive: false,
//   },
//   {
//     name: "Jack",
//     age: 19,
//     position: "middle",
//     isActive: true,
//   },
// ];

// function filterData(arr, obj) {
//   const keys = Object.entries(obj);
//   return arr.filter((person) => keys.every(([key, val]) => person[key] === val));
// }
// let res = filterData(data, {age: 19, position: "junior" });
//  console.log(res)











