'use strict';
const testPackageOne = require('../../test-package-one/lib/test-package-one')
const testPackageTwo = require('../lib/test-package-two');

test('test-package-two', () => {
    expect(testPackageTwo(testPackageOne)).toEqual(19);
});
