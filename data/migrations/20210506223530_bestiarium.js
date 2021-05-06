
exports.up = function(knex) {
    return knex.schema
    .createTable('creatures', function(creatures) {
      creatures.increments('id');
      creatures
        .string('name', 128)
        .notNullable()
        .unique();
    }) 
    .createTable('creatureTypes', function(creatureTypes) {
      creatureTypes.increments();
      creatureTypes
        .string('name', 128)
        .notNullable();

      creatureTypes
        .integer('creature_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('creatures')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('creatureTypes').dropTableIfExists('creatures');
};
