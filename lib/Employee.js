//Sometimes we need a "blueprint" for creating many objects of the same "type". The way to create an "object type", is to use an object constructor function.

//In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.

//In JavaScript, the thing called "this" is the object that "owns" the code. In a constructor function "this" does not have a value. It is a substitute for the new object. The value of :this" will become the new object when a new object is created.



class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";

    }
}

module.exports = Employee;

//Module exports are the instructions that tell Node.js which bits of code (functions, objects, strings, etc.) to export from a given file so that other files are allowed to access the exported code.

//Consider modules to be the same as Javascript Libraries
