
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'josephv_12', password: 'password', phone_number: '626-290-2222' },
      ]);
    });
};
