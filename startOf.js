const { startOfSecond } = require('date-fns');

const result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400));

console.log(result);