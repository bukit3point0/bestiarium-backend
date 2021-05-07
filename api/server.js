const express = require('express')

const creatureRouter = require('./creature/creature-router')

const server = express()

server.use(express.json())

server.use('/api/creatures', creatureRouter)

server.get('/api/*', (req,res) => {
    res.json({
        test: "confirmed"
    })
})

server.get('/*', (req, res) => {
    res.json({
        test: "baseline confirmed"
    })
})

module.exports = server