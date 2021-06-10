
const Intern = require('../lib/Intern.js');

test('Can create a Intern instance.', () => {
    const e = new Intern;
    expect(typeof(e)).toBe('object');
});