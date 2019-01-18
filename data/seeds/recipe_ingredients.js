
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 1, unit_id: null},
        {recipe_id: 1, ingredient_id: 6, quantity: 2, unit_id: 1},
        {recipe_id: 1, ingredient_id: 7, quantity: 6, unit_id: 3},
        {recipe_id: 1, ingredient_id: 8, quantity: 2, unit_id: null},
        {recipe_id: 1, ingredient_id: 9, quantity: 1.5, unit_id: 1},
        {recipe_id: 1, ingredient_id: 10, quantity: 0.5, unit_id: 1}
      ]);
    });
};
