
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('unit_measurements').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('unit_measurements').insert([
        {name: 'cups'},
        {name: 'ounces'},
        {name: 'tablespoons'},
        {name: 'teaspoons'},
        {name: 'grams'},
        {name: 'pints'},
        {name: 'gallons'},
      ]);
    });
};
