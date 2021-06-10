const Employee = require("../lib/Employee");
 
describe("Employee Instance is created", () => {
    const employee = new Employee;
    it("should return Employee object", () => {
        expect(typeof(employee)).toBe("object");
    })
})
