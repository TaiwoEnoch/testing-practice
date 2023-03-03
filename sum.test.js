const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('two plus two NOT equals four', () =>{
  expect(2 + 2).not.toBe(5);
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeFalsy();
  expect(n).toBeDefined();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
});

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).not.toBeGreaterThan(4);
});

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

test('the shopping list has diapers on it', () => {
  expect(shoppingList).toContain('paper towels');
  expect(new Set(shoppingList)).toContain('paper towels');
})

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // Or you can match an exact error message using a regexp like below
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test fails
});

const churchMemebers = [
  'John',
  'Jame',
  'Paul',
  'Peter',
  'Enoch',
];

test('the church members has Peter on it', () => {
  expect(churchMemebers).toContain('Peter');
  expect(churchMemebers).not.toContain('Daniel');
  expect(churchMemebers).not.toContain('Sandra');
});