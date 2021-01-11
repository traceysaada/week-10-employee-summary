// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Manager = require("./Employee");

constructor(name, id, email, officeNumber) {

    class Manager extends Employee {
    super(name, id, email, officeNumber);
    this.officeNumber = officeNumber;

  }
getOfficeNumber(){

    return this.officeNumber;
};

getRole(){

    return "Manager";
}

}


module.exports = Manager;
