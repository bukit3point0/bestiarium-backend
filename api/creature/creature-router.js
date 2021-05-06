const express = require('express')
const {logger, 
    validateCreatureId, 
    validateCreatureName, 
    validateCreatureTypeName
} = require('./creature-middleware')
const Creature = require('./creature-model')
const CreatureType = require('../creature-types/creatureType-model')

const router = express.Router()

// [GET] '/api/creatures/'

// [GET] '/api/creatures/id'

// [GET] '/api/creatures/:id/creatureTypes'

// [POST] '/api/creatures/'

// [POST] '/api/creatures/:id/creatureTypes'

// [PUT] '/api/creatures/:id'

// [DELETE] '/api/creatures/:id


module.exports = router