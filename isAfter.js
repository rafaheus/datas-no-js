// ve se a primeira data é depois a segunda
const { isAfter } = require('date-fns');

const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11));

console.log(result);