const helloWorld = require('./index');

test('should return "Hola Mundo"', () => {
  expect(helloWorld()).toBe("Hola Mundo");
});
