"use strict";

const data = {
  firstName: "John",
  lastName: "Cena",
  visibility: false,
  canYouSeeMe: function () {
    //here 'this' is used...which is inside of a method which refers to the data object
    //this inside a function refers to the global window object
    //alone this refers to the global object as well
    //
    if (this.visibility === false) {
      console.log("You can't see him!");
    } else {
      console.log("Omg how can you see John Cena!");
    }
  },
};

//Objects in JS can contain properties and methods as well
//Declare objects with const as properties or items of an object or array can be updated even if it's constant

data.visibility = true; //like this

data.canYouSeeMe();

//Here canYouSeeMe is a method = a method is a function stored as a property

//though if you want to make an object immutable you can use...freeze

const frozenData = Object.freeze({
  firstName: "John",
  lastName: "Cena",
  visibility: false,
  canYouSeeMe: function () {
    if (this.visibility === false) {
      console.log("You can't see him!");
    } else {
      console.log("Omg how can you see John Cena!");
    }
  },
});

//frozenData.firstName = "Randy"; //this will only give an error when you have strict mode enabled

frozenData.canYouSeeMe();

let visibilityPropDescriptor = Object.getOwnPropertyDescriptor(
  data,
  "visibility"
);
let functionPropDescriptor = Object.getOwnPropertyDescriptor(
  data,
  "canYouSeeMe"
);

console.log(visibilityPropDescriptor);
console.log(functionPropDescriptor);

//Property descriptors display the description of property in an object such as
//value -> actual value of prop
//writeable -> whether prop is writeable or read-only
//configurable -> whether prop descriptor can be changed or not
//enumerable -> whether prop would show up in enumeration or not like in for loop...

//We can also set them for an object
Object.defineProperty(data, "nationality", {
  writable: true,
  enumerable: false, //as this is false it won't show in for loop
  configurable: true,
  value: "American",
});

//for in loop can be used to iterate over an object
for (let key in data) {
  console.log(`${key}:`, data[key]);
}

console.log(
  "Is nationality part of data object? Answer:",
  data.hasOwnProperty("nationality")
);
//hasOwnProperty is used to check if the object has property or not like see above

const parentObject = {
  name: "Manthan",
  job: "Developer",

  //you can override the inherited properties in child object like the parent of this will be proto object which has toString method
  //All javascript objects inherit the properties and methods from prototype object
  toString() {
    return `${this.name} is a ${this.job}`;
  },
};

console.dir(parentObject);

console.log(parentObject.toString());

const childObject = Object.create(parentObject, {
  department: {
    value: "Software Development",
    enumerable: true,
  },
});

console.log(parentObject.isPrototypeOf(childObject));

console.log(childObject.hasOwnProperty("name")); //false it will give cause it's an inherited property
console.log(childObject.hasOwnProperty("department")); //true as it is a property of the childObject

let myMap = new Map();

myMap.set("name", "Nathan");
myMap["city"] = "Jordan"; //only set can set the property of a map

console.log(myMap.get("name")); //and only get can get the value of a property no myMap['name'] will work

const Person = function (name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
};

Person.prototype.getDetails = function () {
  return `${this.name} is a ${this.job} and is ${this.age} years old`;
};

const person = new Person("Manthan", 24, "Dev");

console.dir(person);

console.log(person.getDetails());

console.log(Person.prototype === person.__proto__)

