const { format, parse } = require('date-fns');

const date = new Date(2017, 3, 12)

console.log(format(date, "dd/MMM/yyyy"));

const usandoParse = parse("12/Apr/2017", "dd/MMM/yyyy", new Date());
const usandoParse2 = parse(date, "dd/MMM/yyyy", new Date());
const usandoParse3 = parse(format(date, "dd/MMM/yyyy"), "dd/MMM/yyyy", new Date());

console.log(usandoParse)
console.log(usandoParse2)
console.log(usandoParse3)