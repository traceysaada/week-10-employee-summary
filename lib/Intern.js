// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Intern = require("./Employee");

constructor(school) {

    class Intern extends Employee {
    super(name, id, email, school);
    this.school = this.school;

  }
getSchool(){

    return this.school
}
getRole(){
    return "Intern"; 
}








module.exports = Intern;