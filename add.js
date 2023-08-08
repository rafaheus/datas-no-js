const { add } = require('date-fns');

const date = new Date(2018, 2, 13, 12);

console.log(date);

console.log(add(date, {
    years: 1,
    months: 2,
    weeks: 5,
    days: 1,
    hours: 14,
    minutes: 22,
    seconds: 2
}));

// esse metodo retorna uma nova data, nao altera o objeto inicial

console.log(date);




// dessa forma vc consegue alterar o date original
// date = add(date, {
//     years: 1,
//     months: 2,
//     weeks: 5,
//     days: 1,
//     hours: 14,
//     minutes: 22,
//     seconds: 2
// });
// console.log(date)