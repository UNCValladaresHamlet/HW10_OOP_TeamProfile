const Engineer = require("../lib/Engineer");

 
describe("Engineer Instance is created", () => {
    const engineer = new Engineer;
    it("should return Engineer object", () => {
        expect(typeof(engineer)).toBe("object");
    })
})