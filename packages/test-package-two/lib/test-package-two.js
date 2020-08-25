'use strict';

const _= require('lodash');

const testPackageTwo = (array) => _.reduce(array, (acc, number) => acc + number + 1);

module.exports = testPackageTwo;
