const professores = [
    {nome: "Paulo", materia: "Historia", qtdAlunos: 80},
    {nome: "Rodrigo", materia:"Filosofia", qtdAlunos: 50},
    {nome: "Marcos", materia: "Direito", qtdAlunos: 90},
    {nome: "Ivan", materia: "Matematica", qtdAlunos: 45}
]

const resul = professores.map(prof => prof.qtdAlunos).reduce(function(anterior, atual){
    console.log(anterior, atual)
    return anterior + atual
})

console.log(`A quantidade total de alunos é de ${resul}`)