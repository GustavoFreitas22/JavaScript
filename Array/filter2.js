Array.prototype.filter2 = function(callback){
    const aux = []
    for(let i = 0; i<this.length; i++){
        if(callback(this[i], i, this)){
           aux.push(this[i])

        }
    }
    return aux
}



const prod = [
    {nome: "Notebook", preco: 2500, fragil: true},
    {nome: "Celular", preco: 1700, fragil:true},
    {nome: "Televisão", preco: 280, fragil: true},
    {nome: "Mesa", preco: 1500, fragil: false}
]


// ele faz a filtragem por true or false
const pegaPreco = function (produ){
    if(prod.preco> 500){
        return produ.preco
    }
}
const pegaFragil = e => e.fragil == true

const res = prod.filter2(pegaPreco).filter2(pegaFragil)

console.log(res)