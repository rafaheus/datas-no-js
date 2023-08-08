const { endOfSecond } = require('date-fns');

const result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400));

console.log(result);