let dog1 = {
  name: "Pluto",
  age: 12,
  gender: "male",
  bestfriend: {
    name: "Tom",
  },
  bark: function () {
    console.log(this.name, "Barked!!");
  },
};

// let dog2 = dog1; //This won't work as it's copying the reference to dog1 so...

// dog2.name = "Tommy"; //this change will also reflect in dog1 object

// console.log(dog1);
// console.log(dog2);

// let dog2 = JSON.parse(JSON.stringify(dog1));

// dog2.name = "Adam";
// dog2.bestfriend.name = "Millie"; //this will work and it will only be changed inside dog2

// console.log(dog1);
// console.log(dog2);

// dog1.bark();
// dog2.bark(); //this will give error as JSON.parse will not copy functions so it's not a complete deep copy

// let dog2 = Object.assign({}, dog1);
//It is not a complete deep copy

// dog2.name = "Maggie"
// dog2.gender = "female"
// dog2.bestfriend.name = "Daisy"
// dog2.bark = function() {
//     console.log(this.name, "Meowed!!")
// }

//If we change any nested object value then it will be changing in the dog1 object/parent object as well

let dog2 = {
  ...dog1,
  name: "Maggie",
  gender: "female",
  bestfriend: { name: "Daisy" },
};

dog2.bark = () => {
    console.log(dog2.name, "barked differently!!");
}

//this though will work and it will be a complete deep copy if we use spread operator

console.log(dog1);
console.log(dog2);

dog1.bark();
dog2.bark();

debugger;
