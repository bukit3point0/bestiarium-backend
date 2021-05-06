const express = require('express')

const path = require('path')

const creatureRouter = require('./creature/creature-router')

const server = express()

server.use(express.json())

server.use('/api/creatures', creatureRouter)

server.use(express.static(path.join(__dirname, "client/build")))

server.get('/api/*', (req,res) => {
    res.json({
        test: "confirmed"
    })
})

server.use('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

module.exports = server