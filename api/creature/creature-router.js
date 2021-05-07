const express = require('express')
const {logger, 
    validateCreatureId, 
    validateCreatureName, 
    validateCreatureTypeName
} = require('./creature-middleware')
const Creature = require('./creature-model')
const CreatureType = require('../creature-types/creatureType-model')

const router = express.Router()

router.get('/', logger, (req, res, next) => {
    Creature.get(req.query)
    .then(creatures => {
        res.status(200).json(creatures)
    })
    .catch(next)
})

router.get('/:id', logger, validateCreatureId, (req, res) => {
    res.json(req.creature)
})

router.get('/:id/creatureTypes', logger, validateCreatureId, (req, res, next) => {
    Creature.getCreatureTypes(req.params.id)
    .then(creatureTypes => {
        res.status(200).json(creatureTypes)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Creature.insert(req.body)
    .then(creature => {
        res.status(201).json(creature)
    })
    .catch(next)
})

router.post('/', logger, validateCreatureName, validateCreatureId, (req, res, next) => {
    const creatureId = {...req.body, creatureType_id: req.params.id}
    CreatureType.insert(creatureId)
    .then(creatureType => {
        res.status(201).json(creatureType)
    })
    .catch(next)
})

router.put('/:id', logger, validateCreatureId, (req, res, next) => {
    Creature.update(req.params.id, req.body)
    .then(creature => {
        res.status(200).json(creature)
    })
    .catch(next)
})

router.delete('/:id', logger, validateCreatureId, (req, res, next) => {
    Creature.remove(req.params.id)
    .then(() => {
        res.status(200).json({
            message: `creature deleted`
        })
    })
    .catch(next)
})


module.exports = router
