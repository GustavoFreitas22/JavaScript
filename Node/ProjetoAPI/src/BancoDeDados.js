const sequence = {
    _id: 1,
    get id(){
        return this._id++
    }
}

const produtos = {
    
}


function salvarProd(produto){
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

/*function salvarProd(produto){
    if(!produto.id){
        produto.id = sequence.id
    }
    produtos[produto.id] = produto
    return produto
}*/

function getProduto (id){
    return produtos[id]||{}
}

function getProdutos(){
    return Object.values(produtos)
}


function excluirProd(id){
    const prod = produtos[id]
    delete produtos[id]
    return prod
}

module.exports = {salvarProd, getProduto, getProdutos, excluirProd}