
exports.up = function (knex) {
    return knex.schema
        .createTable('plants', table => {
            table.increments();
            table.string('nickname', 129).notNullable();
            table.string('species', 129).notNullable();
            table.string('h2oFrequency', 129).notNullable();
            table.string('plantImage').notNullable();
            table.string('group', 129).notNullable();
            table.string('instructions', 129).notNullable();
            table.string('lastWater', 129).notNullable();
            table.string('nextWater', 129).notNullable();
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('plants');
};
