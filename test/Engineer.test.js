const Engineer = require('../team/Engineer');

test ('Can set Github account via constructor', () => {
    const testValue = 'GitHubUser';
    const e = new Engineer ('Yee', 1, 'test@test.com', testValue);
    expect(e.github()).toBe(testValue);
});

test ('getRole() should return \"Engineer\"', () => {
    const testValue = 'Engineer';
    const e = new Engineer ('Yee', 'test@test.com', 'GitHubUser');
    expect(e.getRole()).toBe(testValue);
});

test ('Can get Github username via getGitHub()', () => {
    const testValue = 'GitHubUser';
    const e = new Engineer ('Yee', 1, 'test@test.com', testValue);
    expect(e.getGitHub()).toBe(testValue);
});