
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {id: 1, nickname: 'Parlor Palm', species: 'Chamaedorea elegans', h2oFrequency: '', plantImage: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_parlor-palm_variant_small_grant_black_b4347b61-c7ce-4d59-ac07-bcf45e773f4a_1200x.jpg?v=1608586313', group: 'Chamaedorea', instructions: 'Water every 1-2 weeks', lastWater: '', nextWater: ''   },
      ]);
    });
};
