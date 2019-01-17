
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'noodles'},
        {name: 'peas'},
        {name: 'carrots'},
        {name: 'pie crust'},
        {name: 'broth'},
        {name: 'meat sauce'},
        {name: 'parmesan cheese'},
        {name: 'jalapenos'},
        {name: 'chopped onions'},
        {name: 'sauteed mushrooms'}
      ]);
    });
};
