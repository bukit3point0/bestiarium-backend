const db = require('../../data/db-config');

module.exports = {
    get,
    getById,
    insert,
    update,
    remove
}

function get() {
    return db('creatureTypes')
}

function getById(id) {
    return db('creatureTypes')
    .where({id})
    .first()
}

function insert(creatureType) {
    return db('creatureTypes')
    .insert(creatureType)
    .then(id => {
        return getById(id[0])
    })
}

function update(id, edits) {
    return db('creatureTypes')
    .where({id})
    .update(edits)
}

function remove(id) {
    return db('creatureTypes')
    .where('id', id)
    .del()
}