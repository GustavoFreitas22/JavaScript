const contA = require('./InstanciaUnica')
const contB = require('./InstanciaUnica')
const contC = require('./InstanciaNova')()
const contD = require('./InstanciaNova')()

contA.inc()
contA.inc()
console.log(contB)

// O node faz Cache com o require

contC.inc()
contC.inc()
console.log(contD)

// Usando o module.exports com uma function factory, ele retorna um novo objeto e não cria cache

