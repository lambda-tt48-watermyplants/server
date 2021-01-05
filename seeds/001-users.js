
exports.seed = function (knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        { id: 1, username: 'josephv_12', password: 'password', phone_number: '626-290-2222' },
      ]);
    });
};
