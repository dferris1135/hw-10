const Intern = require('../team/Intern');

test ('Can set school via constructor', () => {
    const testValue = 'LMC';
    const e = new Intern('Yee', 1, 'test@test.com', testValue);
    expect(e.school).toBe(testValue);
});

test ('getRole() should return \"Intern\"', () => {
    const testValue = 'Intern';
    const e = new Intern('Yee', 1, 'test@test.com', 'LMC');
    expect(e.getRole()).toBe(testValue);
});

test ('Can get school via getSchool()', () => {
    const testValue = 'LMC';
    const e = new Intern ('Yee', 1, 'test@test.com', testValue);
    expect(e.getSchool()).toBe(testValue);
});