
exports.up = function (knex) {
    return knex.schema
        .createTable('plants', table => {
            table.increments();
            table.string('nickname', 129).notNullable();
            table.string('species', 129).notNullable();
            table.string('h2o_frequency', 129).notNullable();
            table.string('plant_image').notNullable();
            table.string('group', 129).notNullable();
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('plants');
};
