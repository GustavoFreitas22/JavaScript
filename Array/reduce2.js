// Desafio 1: todos os alunos são bolsistas?
// Desafio 2: Algum aluno é bolsista?

const alunos = [
    {nome: "Paulo", nota: 9.5, bolsista: true},
    {nome: "Rodrigo", nota: 8.5, bolsista: false},
    {nome: "Marcos", nota: 4.6, bolsista: true},
    {nome: "Ivan", nota: 6.5, bolsista: false}
]

//const bolsa = alun => alun.bolsista

/*const desafio = alunos.map(bolsa).reduce(function (anterior, atual){
    //console.log(anterior, atual)
    let qtdBolsa = 0
    for(let i = 0; i<alunos.length; i++){
        if(alunos[i].bolsista == true){
            qtdBolsa += 1
        }

    }
    if(qtdBolsa > 0){
        return false
    }else{
        return true
    }
        
})

console.log(`Todos os alunos são bolsistas? ${desafio}`)

if(desafio == false){
    console.log(`Sim, temos alunos bolsistas em nossa institução`)
}else{
    console.log(`Não temos bolsistas em nossa instituição`)
}*/

// O meu está funcionando, mesmo sabendo que não é a melhor forma de ser feito

/*---------------------------- Correção do curso ---------------------------------------------*/

const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a=>a.bolsista).reduce(algumBolsista))
