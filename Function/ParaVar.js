function soma (){
    let soma = 0 
    for(i in arguments){

        soma += arguments[i]
    }
    return soma
}

// arguments é um array interno de toda função, ele armazena todos os argumentos passados

console.log(soma())
console.log(soma(1))
console.log(soma(1,2,3))
