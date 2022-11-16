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
let { name, age } = obj;

console.log(num1, num3, num4, name, age)
