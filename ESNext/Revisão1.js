// let e const

{
    var a = 2
    //let b = 3
}

console.log(a)
// console.log(b) não está neste escopo

// Template String 

const produto = 'PC'
console.log(`${produto} foi caro`)

// Destructuring

const [l, e, ...tras] = 'Teste'

console.log(l, e, tras)

const {idade: i, nome} = {nome: 'julio', idade: 89}
console.log(i, nome)