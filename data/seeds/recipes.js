
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'mom\'s pasta', dish_id: '2', instructions: 'instructions'},
        {name: 'dad\'s pasta', dish_id: '2', instructions: 'instructions'},
        {name: 'mom\'s chicken pie', dish_id: '1', instructions: 'instructions'},
        {name: 'dad\'s chicken pie', dish_id: '1', instructions: 'instructions'},
      ]);
    });
};
