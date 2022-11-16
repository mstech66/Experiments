function outsideFunc() {
  let data = 10;
  return function insideFunc() {
    console.log("Inside Func", data); //this has access to the outside scope as well
    return function veryInsideFunc() {
      console.log("Very Inside Func", data); //this has access to very outside scope as well
    };
  };
}

let data = outsideFunc();
let insideData = data();
let finalData = insideData();

//JS uses lexical scoping which means that if a variable value is not found in the current scope
//it will try to look for the variable value in parent scopes
//Closure uses lexical scoping but the difference is Closure is a function along with the lexical scope

function outside(){
    var a = 20;
    function inside(){
        console.log(a);
    }

    a = 30;

    return inside;
}

let outsideFun = outside()(); //It will print 30 as it's looking for a in inside function and when it didn't find any in local scope...
//it looked for it in outside scope and the value of a is changed to 30 from 20 so it will take the latest value.

//https://dmitripavlutin.com/javascript-closures-interview-questions/

//QUIZ ABOVE
