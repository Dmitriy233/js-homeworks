// const salaries = {
//     John: "4300.00",
//     Ann: "5700.40",
//     Pete: "4900.95",
//   };

//   let getTotalSalaries = (salaries) => {
//    let total = 0;
//    for(let  workerName in salaries){
//     total += Number(salaries[workerName]);
//    };
//    return total;
//   };
//    let result = getTotalSalaries(salaries);
//    console.log(result.toFixed(2));

  

var timetable = {};
  
do {
    var action = prompt("enter action");
    var time = prompt("enter time");
    if(action !== null && time !== null){
        timetable[time] = action ;
        continue;
    } else{
        break;
    }
} while (true);
  
console.log(timetable)
