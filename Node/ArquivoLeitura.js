/*const fs = require('fs')


const caminho = __dirname + '/arquivo.json'

// sincrono:

const conteudo = fs.readFileSync(caminho, 'UTF-8')
console.log(conteudo)

// assincrono:

fs.readFile(caminho, 'UTF-8', (erro, conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./Arquivo.json')
console.log(config.db.user)

fs.readdir(__dirname, (erro, arquivos) => {
    console.log("O que tem dentro da pasta:")
    console.log(arquivos)
})
// __dirname representa o diretorio atual!

*/

const fs = require('fs')

const caminho = __dirname + '/arquivoParaTeste.txt'

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

fs.readFile(caminho, 'utf-8', (error, conteudo) =>{
    console.log(conteudo)
})

const caminho2 = __dirname + '/ArquivoGerado.json'

fs.readFile(caminho2, "UTF-8", (err, cont) =>{
    const carro = JSON.parse(cont)
    console.log(carro.modelo)
})



