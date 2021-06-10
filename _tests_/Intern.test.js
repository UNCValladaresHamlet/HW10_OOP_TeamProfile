const Intern = require("../lib/Intern");

 
describe("Intern Instance is created", () => {
    const intern = new Intern;
    it("returns Intern object", () => {
        expect(typeof(intern)).toBe("object");
    })
})

