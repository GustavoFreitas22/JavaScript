const carrinho = [
     '{ "nome": "Borracha", "preco": 3.50}',
     '{ "nome": "Caneta", "preco": 5.0}', 
     '{ "nome": "KitLapis", "preco": 7.5}'
]


const transformObj = produto => JSON.parse(produto)
const trazPreco = obj => obj.preco

let res = carrinho.map(transformObj).map(trazPreco)
console.log(res)