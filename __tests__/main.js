const wordCount = require('../dist/word-count.cjs');

test('word-count', () => {
  const p =
    'Lorem ipsum dolor   sit amet consectetur adipisicing elit. Voluptates provident beatae exercitationem unde, natus debitis doloribus dolorem, dolorum numquam culpa perferendis? Incidunt iusto magnam ex, reprehenderit dolor consectetur placeat quo.';
  expect(wordCount(p)).toBe(30);
});
