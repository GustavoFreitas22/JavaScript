const { promises } = require('fs')
const http = require('http')

const getTurma = (letra) => {
    const caminho = `file:///C:/Users/Pichau/Desktop/Estudo%20js/Node/${letra}.json`
    return new promises((resolve, reject) =>{
        http.get(caminho, res =>{
            let result =''
            res.on('data', dado =>{
                result += dado
            })
            res.on('end', () =>{
                callback(JSON.parse(result))

                try{
                    resolve(JSON.parse(result))
                }catch(e){
                    reject(e)
                }
            })
        })

    })
}



/*getTurma('A').then(alunos =>{
    nomes = nomes.concat(alunos.map(a => `Aluno: ${a.nomes}`))
    getTurma('B').then(alunos =>{
        nomes = nomes.concat(alunos.map(a => `Aluno: ${a.nomes}`))
        getTurma('C').then(alunos =>{
            nomes = nomes.concat(alunos.map(a => `Aluno: ${a.nomes}`))
            console.log(nomes)
        })
    })
})*/


Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nomes))
    .then(nomes => console.log(nomes))
    