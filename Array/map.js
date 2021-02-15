const num = [1,2,3,4,5]

// Ele preceisa de um proposito 

let result = num.map(function (e){
    return e*2
})

console.log(result)

const soma = e => e + 10
const mult = e => e * 10
const transf = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

result = num.map(soma)
console.log(result)
result = num.map(mult).map(transf)
console.log(result)

