//Example 2

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// // Combining two arrays
// const combinedArray = [...array1, ...array2];
// console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// // Cloning an array
// const clonedArray = [...array1];
// console.log(clonedArray); // Output: [1, 2, 3]

//Example 2

const person = { name: "pranav", age: 22 };
const job = { title: "Developer", company: "Codegnan" };

// Merging two objects
const personWithJob = { ...person, ...job };
console.log(personWithJob); 
// Output: { name: "Pranav", age: 22, title: "Developer", company: "Codegnan" }

// Adding new properties while cloning
const updatedPerson = { ...person, age: 22, city: "Hyd" };
console.log(updatedPerson);
// Output: { name: "Pranav", age: 22, city: "Hyd" }

