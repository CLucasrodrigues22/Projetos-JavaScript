const porta = 3003
 
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
 
app.use(express.urlencoded({ extended: true })) // x-wwww.urlencoded
 
app.get('/produtos', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos()) // Converter para JSON
})
 
//recuperar o id atraves da url
app.get('/produtos/:id',(req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})
 
//salva um novo produto atraves do formulario tipo post
app.post('/produtos/', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

//altera um produto atraves do id
app.put('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

//excluir produto atraves do id da url
app.delete('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto) //JSON
})
 
app.listen(porta,()=>{
    console.log(`Servidor está executando na porta ${porta}.`)
})