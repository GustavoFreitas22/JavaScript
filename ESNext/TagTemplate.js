// Tagged Template - processa o template dentro da function 

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return "Outra String"
}

const carro = "Veloster"
const marca = "Hyundai"

console.log(tag `Esse ${carro}, carro de PLAYBOY PUTO!, que a ${marca} fabrica.`)