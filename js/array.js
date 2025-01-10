//slice vs splice

let funArr = ["Apple", "Banana", "Cherry", "Guava", "Mango", "Strawberry"];

//slice does not modify the original array but it returns a new array
//last index in slice is not included
let oneToFour = funArr.slice(1, 4); //it will not take 4th index

console.log(oneToFour); //it returns ["Banana", "Cherry", "Guava"]

let singleParameter = funArr.slice(2);

console.log(singleParameter); //returns all the elements after index 2 including the value at index 2

let biggerThanSize = funArr.slice(6); //it will return empty array as there is no element at index 6

console.log(biggerThanSize); //return empty array

console.log(funArr); //not modified...still the same as we are using slice

let endIsBigger = funArr.slice(1, 8); //if the ending index is bigger than array size then it will extract till the end of the array

console.log(endIsBigger); //extracts till the arr.length

let negativeEnding = funArr.slice(2, -1); //it will extract from index 2 till second last element

console.log(negativeEnding); //from index 2 including the value of it till second last element as it's -1

//slice shallow copies the references of the original array objects for newly exported arrays so if any change is made it will reflect in original as well
//for ex.

let data = [
  { index: 0, job: "dev", salary: "shhh" },
  { index: 1, job: "tester", salary: "omg" },
  { index: 2, job: "pm", salary: "yaar wut" },
];

let newData = data.slice(1, 2); //it will extract the object at index 1 it will not include the object at index 2
newData[0].salary = "2200$";

console.log(newData);

console.log(data);

//splice - modifies the original array and returns the removed elements

let newArr = [1,2,3,7,8, 9, 10, 11]

console.log(newArr.splice(2, 3)) //it will remove 3 elements starting from index 2

console.log(newArr)

console.log(newArr.splice(2, 1, 4, 5, 6)) //the items provided in third arguments replaces the deleted items

console.log(newArr)

console.log(newArr.splice(2)) //it will remove all the elements starting from index 2

console.log(newArr)


//array methods - forEach, map, filter, reduce

//forEach - it iterates over the array and executes the callback function for each element
//it does not return anything
//it does not modify the original array