//Problem with var
console.log(myName) //we can use this variable even before it is declared

var myName = "Manthan";

//var ignores the block code
if(true){
    var data = 'Manthan';
}

console.log(data); //this will print the data

function sayHi(){
    greeting = "Hello"; 

    console.log(greeting, "Manthan")

    var greeting;
}

sayHi();

// Use let and const instead of var while declaring variables
let price = 20;
const currency = '$';

//ES6 Class Syntax
class Drink{
    constructor(type){
        this.type = type;
        this.greeting = 'Your refreshing drink is';
    }

    printDrink(){
        console.log(this.greeting, this.type);
    }
}

const soda = new Drink("Soda");
soda.printDrink();

//ES7 Class Syntax
class DrinkNew{
    greeting = 'Your new refreshing drink is'; //instead of putting the prop in a constructor we can do smth like this

    constructor(type){
        this.type = type;
    }

    printDrink = () => {
        console.log(this.greeting, this.type); //always use this.propertyName in member functions inside a class
    }
}

const soda2 = new DrinkNew("Soda");
soda2.printDrink();

//Spread Operator - Used for combining array or object elements

const oldArray = [1,2,3,4];
const newArray = [...oldArray, 5,6,7];

console.log(newArray);

const oldObject = {
    name: 'Manthan',
    github: true,
    instagram: false
}

const newObject = {
    ...oldObject,
    gender: "male"
}

console.log(newObject);

//Rest Operator - Used to merge a list of function arguments

const sortArrayWithASmile = (...args) =>{
    console.log("Sorting with a smile :D")
    return args.sort((a,b) =>{return a-b});
}

console.log(sortArrayWithASmile(6,4,2,612,53,6,7,23));

//Destructuring

const arr = [1,2,3,4];
const obj = {name: "Manthan", age: 24};

let [num1, , num3, num4] = arr;
let { name: newName, age } = obj;

console.log(num1, num3, num4, newName, age)

//When to use arrow functions vs regular functions
//Always use regular functions for object member functions

var userName = "Meraki";
var userAge = 20;
var user = {
    userName: "Manthan",
    userAge: 24,
    printInfo: function(){
        console.log(this); //this will point to current this the object have
        console.log(this.userName, this.userAge);
    },
    printInfoWithArrow: () => {
        console.log(this); //this will be pointing to outside of the user which will be global window object
        console.log(this.userName, this.userAge);
    }
}

user.printInfo();
user.printInfoWithArrow();

//Hoisting does not work with arrow functions

// newFunc(); //this will work just fine

// function newFunc() {
//     console.log("Executing newFunc")
// }

// veryNewFunc(); //this will give a refernce error

// const veryNewFunc = () => {
//     console.log("Executing veryNewFunc");
// }

//when we can use an arrow function instead of regular one

class Store{
    constructor(name){
        this.name = name;
    }
    printStoreInfo() {
        console.log("Welcome to",this.name);
    }
}

const newStore = new Store("Dept Store");

newStore.printStoreInfo(); //will work just fine

setTimeout(newStore.printStoreInfo, 1000); //this will print ""

class ArrowStore{
    constructor(name){
        this.name = name;
    }
    printStoreInfo = () => {
        console.log("Welcome to",this.name);
    }
}

const newArrowStore = new ArrowStore("Dept Store New");

setTimeout(newArrowStore.printStoreInfo, 1000);

//In Regular function, the value of 'this' is dynamic where in arrow functions it equals to the value of outer context

//IIFE (Immediately Invoked Function Expression)

(function(){
    console.log("IIFE Invoked!");
})();

//can also be an arrow function...no problem at all
(()=>{
    console.log("IIFE with an arrow!")
})();

//can also use with args
(function(x,y){
    console.log("Here is the sum", x+y, 'Tada!');
})(1,2);

//Callback Function

function removeNegatives(arr, callback){
    let positiveArr = [];
    arr.forEach(item => {
        if(callback(item)){
            positiveArr.push(item)
        }
    });
    console.log(positiveArr);
}

removeNegatives([1,2,3,4,-3,-4], x => x >= 0);

//Method memoization is a technique to store results from previous expensive function exections

const memoize = (func) => {
    let cache = {};
    return (...args) => {
        let num = args[0];
        if(num in cache){
            console.log("it is in cache...using that")
            return cache[num];
        } else {
            let result = func(num);
            cache[num] = result;
            return result;
        }
    }
}

const calcFactorial = memoize(
    (x) => {
        if(x === 0){
            return 1;
        } else {
            return x * calcFactorial(x - 1);
        }
    }
)

console.log(calcFactorial(5)); //calculates for first time
console.log(calcFactorial(6)); //uses 5's result from cache and calculates just for 6

//Method Chaining is a mechanism where you call the method on another method for the same object

function Land() {
    this.name = "Broker's Land";
    this.size = "2500 sqft"
    this.status = "";
}

Land.prototype.open = function(){
    this.status = "Open for sale"
    return this;
}

Land.prototype.close = function(){
    this.status = "Closed for sale"
    return this;
}

Land.prototype.printInfo = function(){
    console.log(this.name, this.size, this.status);
}

const newLand = new Land();

newLand.open().printInfo();


//Method Currying is where instead of passing in large number of arguments
//you return a nested function inside of a function to split arguments from main function

function calculateVolume(length){
    return function(breadth){
        return function(height){
            return length * breadth * height;
        }
    }
}

console.log(calculateVolume(1)(2)(3));

//calculated props

const propName = 'c';

const rank = {
    [propName]: 3
}

console.log(rank);
