Array.prototype.map2 = function(callback){
    var aux = []
    for(let i = 0; i < this.length; i++ ){
        aux.push(callback(this[i], i, this))
    }
    return aux
}


const carrinho = [
    '{ "nome": "Borracha", "preco": 3.50}',
    '{ "nome": "Caneta", "preco": 5.0}', 
    '{ "nome": "KitLapis", "preco": 7.5}'
]


const transformObj = produto => JSON.parse(produto)
const trazPreco = obj => obj.preco

let res = carrinho.map2(transformObj).map2(trazPreco)
console.log(res)