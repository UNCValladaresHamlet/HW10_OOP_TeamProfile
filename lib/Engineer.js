const Employee = require("./Employee"); 
//To include a module, use the require() function with the name of the module:

//In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.

//By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods:

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
//Consider modules to be the same as Javascript Libraries