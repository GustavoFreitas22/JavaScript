// Filter basicamente faz um filtro dos indices de array

const prod = [
    {nome: "Notebook", preco: 2500, fragil: true},
    {nome: "Celular", preco: 1700, fragil:true},
    {nome: "Televisão", preco: 280, fragil: true},
    {nome: "Mesa", preco: 1500, fragil: false}
]


// ele faz a filtragem por true or false
const pegaPreco = function (produ){
    if(produ.preco> 500){
        return prod.preco
    }
}
const pegaFragil = e => e.fragil == true

const res = prod.filter(pegaPreco).filter(pegaFragil)

console.log(res)