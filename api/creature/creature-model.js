const db = require('../../data/db-config');

module.exports = {
    get,
    getById,
    insert,
    // getCreatureTypes,
    update,
    remove
}

function get() {
    return db('creatures')
}

function getById(id) {
    return db('creatures')
    .where({id})
    .first()
}

function insert(creature) {
    return db('creatures')
    .insert(creature)
    .then(id => {
        return getById(id[0])
    })
}

function update(id, edits) {
    return db('creatures')
    .where({id})
    .update(edits)
}

function remove(id) {
    return db('creatures')
    .where('id', id)
    .del()
}