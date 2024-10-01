//Example 1

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
//   }
  
//   console.log(sum(1, 2, 3));      // Output: 6
//   console.log(sum(5, 10, 15, 20)); // Output: 50
  

//Example 2


function fun(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}
console.log(fun(1, 2)); //3
console.log(fun(1, 2, 3)); //6
console.log(fun(1, 2, 3, 4, 5)); //15  
  