const alunos = [
    {nome:"Joao", nota: 6.9},
    {nome: "Maria", nota: 8.5}
]

// imperativo 

let total = 0 
for(let i = 0; alunos.length; i++){
    total += alunos[i].nota
}

console.log(total/alunos.length)

// declarativa

const getNota = aluno => aluno.nota

const soma = (tot, atual) => tot+atual

const total2 = alunos.map(getNota).reduce(soma)

console.log(total2/alunos.length)


// Diferença entre os dois metodos: Imperativo - Ensinar exatamente os passos a serem executados; 
// Interativo - apenas fala o que precisa ser feito e as coisas são feitas internamente

// Tentar mudar o pensamento para uma forma mais declarativa 
