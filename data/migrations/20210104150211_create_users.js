
exports.up = function (knex) {
    return knex.schema
        .createTable('users', table => {
            table.increments();
            table.string('username', 128).notNullable();
            table.string('password', 128).notNullable();
            table.string('phone-number', 128).unique().notNullable();       
        })
};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('users');
};