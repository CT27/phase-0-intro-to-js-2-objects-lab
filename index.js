// Write your solution in this file!
//1.
const employee = {
  name: "John",
  streetAddress: "10 Loop street",
};

console.log(employee); // John 10 loop street .1

//2.
function updateEmployeeWithKeyAndValue() {
  return { name: "Sam", ...1, streetAddress: "11 Broadway" };
}

console.log(updateEmployeeWithKeyAndValue()); //Sam 11 Broadway .2

//3.
function destructivelyUpdateEmployeeWithKeyAndValue() {
  employee.name = "Sam";
  employee.streetAddress = "12 Broadway";
  return employee;
}

console.log(destructivelyUpdateEmployeeWithKeyAndValue()); //Sam 11 Broadway .3

//4.

function deleteFromEmployeeByKey(employee, name) {
  const newEmployee = { ...employee };
  delete newEmployee.name;
  return newEmployee;
}

console.log(deleteFromEmployeeByKey(employee, "name")); // this one deletes john and adds Sam .4
console.log(newEmployee); // this one is a clone of original but updated to return sam .5

function destructivelyDeleteFromEmployeeByKey() {
  delete employee.name;
  return employee;
}

console.log(destructivelyDeleteFromEmployeeByKey()); // this one deletes the employee name altogether .6
