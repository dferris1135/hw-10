const Manager = require('../team/Manager');
const Employee = require('../team/Employee');

test ('Can set office number via constructor argument', () => {
    const testValue = 100;
    const e = new Manager('Yee', 1, 'test@test.com', testValue);
    expect(e.officeNumber).to.equal(testValue);
});

test ('getRole() should return \"Manager\""', () => {
    const testValue = 'Manager';
    const e = new Manager('Yee', 1, 'test@test.com', 100);
    expect(e.getRole()).to.equal(testValue);
});

test ('Can get office number via getOfficeNumber()', () => {
    const testValue = 100;
    const e = new Manager('Yee', 1, 'test@test.com', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});