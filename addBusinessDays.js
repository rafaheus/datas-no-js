const { addBusinessDays } = require('date-fns')

const resultado = addBusinessDays(new Date(2014, 8, 1), 10)

console.log(resultado)