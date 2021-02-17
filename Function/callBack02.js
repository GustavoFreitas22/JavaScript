const notas = [7, 4, 8, 10, 9, 5]

// Sem callBack

let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7 ){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// Com CallBack

const  notasBaixas2 = notas.filter(function(notas){
    return notas < 7;
})

console.log(notasBaixas2)


/*O filter percorre o objeto identificando as notas < 7, com o objeto "notasBaixas" recebendo notas.filter, vira um callback*/
