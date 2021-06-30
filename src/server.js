//Requisição
const express = require('express')
const route = require('./route')
const path = require('path')
//Inicia o express
const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({ extended: true }))

server.use(route)

//Inicia servidor node na porta 3000
server.listen(3000, () => console.log("RODANDO"))



