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

frozenData.firstName = "Randy"; //this will only give an error when you have strict mode enabled

frozenData.canYouSeeMe();


