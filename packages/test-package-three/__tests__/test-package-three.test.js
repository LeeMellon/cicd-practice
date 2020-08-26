'use strict';

const testPackageThree = require('../lib/test-package-three');
test('test-package-three', () => {
  expect(testPackageThree.reduce((acc, num) => acc + num)).toEqual(30)
});
