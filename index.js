// Write your solution in this file!
//1.
const employee = {
  name: "John",
  streetAddress: "10 Loop street",
};

console.log(employee);

//2.
function updateEmployeeWithKeyAndValue() {
  return { name: "Sam", ...1, streetAddress: "11 Broadway" };
}

//3.
function destructivelyUpdateEmployeeWithKeyAndValue() {
  employee.name = "Sam";
  employee.streetAddress = "12 Broadway";
  return employee;
}

//4.

const newEmployee = { ...employee };

function deleteFromEmployeeByKey() {
  delete newEmployee.name;
  newEmployee.name = "Sam";
  newEmployee.streetAddress = "11 Broadway";
  return newEmployee;
}

console.log(deleteFromEmployeeByKey()); // this one deletes john and adds Sam
console.log(newEmployee); // this one is a clone of original

function destructivelyDeleteFromEmployeeByKey() {
  delete employee.name;
  return employee;
}
