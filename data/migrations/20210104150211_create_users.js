
exports.up = function (knex) {
    return knex.schema
        .createTable('users', table => {
            table.increments('user_id');
            table.string('username', 128).notNullable();
            table.string('password', 128).notNullable();
            table.string('phone_number', 128).unique().notNullable();       
        })
        .createTable('plants', table => {
            table.increments('plant_id');
            table.string('nickname', 129).notNullable();
            table.string('species', 129).notNullable();
            table.integer('h2oFrequency');
            table.string('plantImage').notNullable();
            table.string('group', 129).notNullable();
            table.string('instructions', 129).notNullable();
            table.string('lastWater', 129).notNullable();
            table.string('nextWater', 129).notNullable();
            table.integer('id_user')
            .unsigned()
            .references('user_id').inTable('users')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
        });
};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('users');
};
