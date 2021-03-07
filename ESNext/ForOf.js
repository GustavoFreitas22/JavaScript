// Operando com base nos valores

for(let i of "Gustavo"){
    console.log(i)
}

const nome = ["Gustavo", "Ana", "Pedro", "João"]

for(let j of nome){
    console.log(j)
}

const games = new Map([
    ['LoL',{bom: false} ], 
    ['Valorant', {bom: true}], 
    ['God Of War', {bom: true}]
])

for (let jogos of games){
    console.log(jogos)
}


const produtos = [
     { nome: 'geladeira',
        preco: 1562
    },
    {
        nome: "carro", 
        preco: 300000
    },
    {
        nome: "Teclado", 
        preco: 256
    }
]

for (let prod of produtos){
    console.log(prod.preco)
    console.log(prod)
}

for(let qualidade of games.values()){
    console.log(qualidade)
}