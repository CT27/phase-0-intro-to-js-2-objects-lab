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
function deleteFromEmployeeByKey() {
  const newEmployee = { ...employee };
}
