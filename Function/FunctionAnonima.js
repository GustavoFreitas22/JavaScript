const soma = function (a, b){
    return a + b
}

const imprime = function (x, y, op = soma){
    console.log(op(x, y))
}

imprime(5, 5)

imprime(2, 3, (b, a) =>a - b)