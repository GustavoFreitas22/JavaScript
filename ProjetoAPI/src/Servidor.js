const ports = 3003
const bancoDados = require('./BancoDeDados.js')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()


app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) =>{
    res.send(bancoDados.getProdutos())
    
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) =>{
    const produto = bancoDados.salvarProd({
        name: req.body.name, 
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) =>{
    const produto = bancoDados.salvarProd({
        id: req.params.id,
        name: req.body.name, 
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) =>{
    const produto = bancoDados.excluirProd(req.params.id)
    res.send(produto)
})

app.listen(ports, () => console.log(`Servidor executando na porta ${ports}`))