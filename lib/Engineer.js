// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Engineer = require("./Employee");


  constructor(name, id, email, github) {
    class Engineer extends Employee {
    super(name, id, email, github);
    this.github = github;
  }
  getRole(){
    return "Engineer"; 
}
getGithub(){
    return this.github;
}
}

module.exports = Engineer;
