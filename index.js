// Write your solution in this file!
//1.
const employee = {
  name: "John",
  streetAddress: "10 Loop street",
};

console.log(employeeWithKeyAndValue());

//2.
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { name: "Sam", ...1, streetAddress: "11 Broadway", ...2 };
}
console.log(updateEmployeeWithKeyAndValue());
