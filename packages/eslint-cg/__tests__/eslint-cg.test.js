'use strict';

const eslintCg = require('../lib/index');

test('eslint-config', () => {
  expect(eslintCg.plugins).toEqual(['prettier', 'eslint-plugin-import', 'react']);
});
