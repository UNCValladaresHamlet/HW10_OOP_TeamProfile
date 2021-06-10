
const Manager = require("../lib/Manager");

 
describe("Manager Instance is created", () => {
    const manager = new Manager;
    it("returns Manager object", () => {
        expect(typeof(manager)).toBe("object");
    })
})