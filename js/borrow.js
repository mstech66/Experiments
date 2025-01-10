let employee = {
  firstName: "Manthan",
  lastName: "Mevada",
  getDetails: function (city, post) {
    console.log(
      `${this.firstName} ${this.lastName} is from ${city} working as a ${post}`
    );
  },
};

employee.getDetails("Ahmedabad", "Developer");

let newEmployee = {
    firstName: "Niraj",
    lastName: "Patel"
};

employee.getDetails.call(newEmployee, "Surat", "UX Designer");

//Call borrows the function from employee and executes it whenever call is used immediately

let anotherNewEmployee = {
    firstName: "Katie",
    lastName: "Johnson"
};

employee.getDetails.apply(anotherNewEmployee, ["New Jersey", "Automation Engineer"]);

//apply is similar to call and executes in the next available execution cycle
//also whenever it is used but takes arguments as an array

let anotherNewNewEmployee = {
    firstName: "Delta",
    lastName: "Evans"
}

const newNewEmployeeDetails = employee.getDetails.bind(anotherNewNewEmployee, "New York", "Project Manager");
//bind also does the same thing as call and apply but it does not execute when it is used but it returns a function

newNewEmployeeDetails();
//which you can call whenever you need to