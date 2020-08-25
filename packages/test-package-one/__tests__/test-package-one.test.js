'use strict';

const testPackageOne = require('../lib/test-package-one');

test('test-package-one', () => {
  expect(testPackageOne).toContain(5);
});
