const initArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const squareIt = function (num) {
  return Math.pow(num, 2);
};

const addByOne = function(num){
    return num + 1;
}

console.log(initArray.map(squareIt));
//map is an higher order function as it takes function as an argument the squareIt function though is a callback function

//can do the implementation of map ourselves here like...

Array.prototype.applyFunc = function(functionName){
    let result = [];

    this.forEach(element => {
        result.push(functionName(element));
    });

    return result;
}

//here the applyFunc is a higher order function and we are passing and calling another function as an argument to this higher order function

console.log(initArray.applyFunc(squareIt)); //here calling squareIt function

console.log(initArray.applyFunc(addByOne)); //and here calling addByOne function

