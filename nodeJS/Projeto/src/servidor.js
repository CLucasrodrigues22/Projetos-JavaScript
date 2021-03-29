const porta = 3003

const { request } = require('express')
const express = require('express')
const app = express()

// app.get('/produtos', (req, res, next) => {
//     console.log('MIddleware 1...')
//     next()
// })

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 }) // Converte para JSON automaticamente
})

app.listen(porta, () => {
    console.log(`Servidor agora está executando na porta ${porta}.`)
})