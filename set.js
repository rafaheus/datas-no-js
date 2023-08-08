const { set } = require('date-fns');
// existem outros set
const result = set(
    //original
    new Date(2014, 8, 20),
    //mudar para 
    { year: 2015, month: 9, date: 20 });

    console.log(result);