const escola = [{
    nome: "Turma M1", 
    alunos: [{nome: "Gustavo", nota:8.7},
             {nome: "Ana", nota:9.4    }]
}, {
    nome: "Turma M2",
    alunos: [{nome: "Heitor", nota: 6.9}, 
             {nome: "Julia", nota: 8.1 }]
}]

const getNota = alunos => alunos.nota
const getNotaDaturma = turma => turma.alunos.map(getNota)

const notas1 = escola.map(getNotaDaturma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaturma)
console.log(notas2)