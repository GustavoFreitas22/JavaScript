Array.prototype.reduce2 = function (callback, inicial){
    
    const idInicial = inicial ? 0:1
    let acumulador = inicial ||this[0]
    for(let i = idInicial; i<this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor

const num = [1,2,3,4,5]
console.log(num.reduce2(soma))