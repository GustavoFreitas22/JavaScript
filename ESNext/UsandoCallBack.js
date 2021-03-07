const http = require('http')

const getTurma = (letra, callback) => {
    //const caminho = `file:///C:/Users/Pichau/Desktop/Estudo%20js/Node/${letra}.json`
    http.get(caminho, res =>{
        let result =''
        res.on('data', dado =>{
            result += dado
        })
        res.on('end', () =>{
            callback(JSON.parse(result))
        })
    })
}

let nomes =[]

getTurma('A', alunos =>{
    nomes = nomes.concat(alunos.map(a => `Aluno: ${a.nomes}`))
    getTurma('B', alunos =>{
        nomes = nomes.concat(alunos.map(a => `Aluno: ${a.nomes}`))
        getTurma('C', alunos =>{
            nomes = nomes.concat(alunos.map(a => `Aluno: ${a.nomes}`))
            console.log(nomes)
        })
    })
})