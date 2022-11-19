//slice vs splice

let funArr = ["Apple", "Banana", "Cherry", "Guava", "Mango", "Strawberry"];

//slice does not modify the original array but it returns a new array

let oneToFour = funArr.slice(1, 4); //it will not take 4th index

console.log(oneToFour);

let biggerThanSize = funArr.slice(6);

console.log(biggerThanSize); //return empty array

console.log(funArr); //not modified...still the same

let singleParameter = funArr.slice(2);

console.log(singleParameter); //returns all the elements after index 2 including the value at index 2

let endIsBigger = funArr.slice(1, 8);

console.log(endIsBigger); //extracts till the arr.length

let negativeEnding = funArr.slice(2, -1);

console.log(negativeEnding); //from index 2 including the value of it till second last element as it's -1

//slice shallow copies the references of the original array objects for newly exported arrays so if any change is made it will reflect in original as well
//for ex.

let data = [
  { index: 0, job: "dev", salary: "shhh" },
  { index: 1, job: "tester", salary: "omg" },
  { index: 2, job: "pm", salary: "yaar wut" },
];

let newData = data.slice(1, 2);
newData[0].salary = "2200$";

console.log(newData);

console.log(data);
