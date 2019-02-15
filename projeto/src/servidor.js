const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

// padronizar requisições para formato de objeto
app.use(bodyParser.urlencoded({
    extended: true
}))


app.get('/produtos', (req, res, next) => {
    res.send(
        bancoDeDados.getProdutos()
    ) // formato JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco,
        id: req.params.id
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(
        req.params.id)
    res.send(produto) // JSON
})
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})