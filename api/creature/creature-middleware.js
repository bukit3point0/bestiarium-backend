const yup = require('yup')
const Creatures = require('./creature-model')

function logger(req, res, next) {
    console.log(`
        ${req.method} request to ${res.baseUrl} endpoint
        req.body ${JSON.stringify(req.body)}
        req.params.id ${req.params.id}
    `)
    next()
}

async function validateCreatureId(req, res, next) {
    try {
        const creature = await Creatures.getById(req.params.id)
        if(!creature) {
            next({
                status: 404,
                message: `creature ${req.params.id} not found`
            })
        } else {
            req.creature = creature
            next()
        }
    } catch(err) {
        next(err)
    }
}

const creatureNameSchema = yup.object({
    name: yup.string()
    .trim()
    .required('creature name required')
    .min(2, 'creature must have at least 2 characters in its name')
    .max(150, 'character limit 150 on name')
})

async function validateCreatureName(req, res, next) {
    try {
        const validated = await nameSchema.validate(req.body, {
            stripUnknown: true
        })
        req.body = validated
        next()
    } catch (err) {
        next({
            status: 400,
            message: err.message
        })
    }
}

const creatureTypeSchema = yup.object({
    name: yup.string()
    .trim()
    .required('creature name required')
    .min(2, 'creature must have at least 2 characters in its name')
    .max(150, 'character limit 150 on name')
})

async function validateCreatureTypeName(req, res, next) {
    try {
        const validated = await postSchema.validate(req.body, {
            stripUnknown: true
        })
        req.body = validated
        next()
    } catch (err) {
        next({
            status: 400,
            message: err.message
        })
    }
}

module.exports = {logger, validateCreatureId, validateCreatureName, validateCreatureTypeName}