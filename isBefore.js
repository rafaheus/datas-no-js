const { isAfter } = require('date-fns');

const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11));

console.log(result);