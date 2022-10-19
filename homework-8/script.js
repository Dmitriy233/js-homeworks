// let getSumTrue = (arr) => {
//     let totalTrue = 0;
//     for (let item of arr) {
//         if (item === true) {
//             totalTrue += item;
//         }
//     }
//     return totalTrue;
// }

// let result = getSumTrue([true, false, false, true, false]);
// // let result = getSumTrue([false, false, false, false]);
// // let result = getSumTrue([]);
// console.log(`There are ${result} true values ​​in the array`);




//  let getOccurrencesCount = (arr) => {
//     let count = {}
//     for (let elem of arr) {
//         if (count[elem] === undefined){
//             count[elem] = 1;
//         } else{
//             count[elem]++;
//         }
//     }
//     return count;
//  }
//    let result = getOccurrencesCount(["a", "v", "a", "b", "b"]);
// //  result = getOccurrencesCount(["apples","oranges","pears","pears","apples","oranges","oranges","pears",]);
//    console.log(result);






let findExcess = (arr) => {
    let oddArray = [];
    let evenArray = [];
    for (let elem of arr) {
        if (elem % 2 !== 0) {
            oddArray.push(elem);
        } else if(elem % 2 == 0){
            evenArray.push(elem);
        }
    }
    if(oddArray.length < evenArray.length){
        return oddArray;
    } else{
        return evenArray;
    }
    
  
}

let result = findExcess([0, 1, 2]);
// let result = findExcess([1, 0, 3]);
// let result = findExcess([2, 6, 8, 10, 3]);
// let result = findExcess([0, 0, 3, 0, 0]);
// let result = findExcess([1, 1, 0, 1, 1]);

console.log(result)