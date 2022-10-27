const data = [
  {
    name: "John",
    age: 24,
    position: "senior",
    isActive: false,
  },
  {
    name: "Peter",
    age: 33,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sam",
    age: 29,
    position: "junior",
    isActive: true,
  },
  {
    name: "Mary",
    age: 24,
    position: "middle",
    isActive: false,
  },
  {
    name: "Steve",
    age: 23,
    position: "middle",
    isActive: true,
  },
  {
    name: "Kate",
    age: 31,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sally",
    age: 19,
    position: "junior",
    isActive: false,
  },
  {
    name: "Jack",
    age: 19,
    position: "middle",
    isActive: true,
  },
];

function filterData(arr, obj) {
  const keys = Object.entries(obj);
  return arr.filter((person) => keys.every(([key, val]) => person[key] === val));
}
let res = filterData(data, {age: 19, position: "junior" });
 console.log(res)





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