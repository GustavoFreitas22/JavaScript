// Arrow
const soma = (a, b) => {
    return a+b
}

console.log(soma(3,2))

// this
const lexicol = () => console.log(this === exports)
lexicol()

//param default
function log(nome = "Gustavo"){
    console.log(nome)
}
log()

// operador Rest
function total(...nums){
    let tot = 0
    nums.forEach(n => tot += n)
    return tot
}
console.log(total(1,2,3,4,5))

