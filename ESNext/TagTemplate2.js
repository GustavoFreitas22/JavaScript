function real (partes, ...valores){
    const result = []
    valores.forEach((valor, indice) => {
        if(valor === isNaN){
            return valor
        }else{
            valor = `R$${valor.toFixed(2)}`
        }

        result.push(partes[indice], valor)
    })
    return result
}

const preco = 26.66
const parcela = 5

console.log(real`1x de ${preco} ou 5x de ${parcela}`)