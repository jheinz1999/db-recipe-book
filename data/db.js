const knex = require('knex');
const knexFile = require('../knexfile');

const db = knex(knexFile.development);

module.exports = {

  getDishes: () => {

    return db.select().from('dishes');

  },

  addDish: dish => {

    return db.insert(dish).into('dishes').then(ids => { id: ids[0]});

  },

  getDish: id => {

    /*

      {

        dish: [dishdata],
        recipes: [..recipes]

      }

      return new Promise(function(resolve, reject) {

        db.select().from('dishes').where({ id }).then(dish => {



        });

      });

    */

    return db.select('dishes.name as dish', 'recipes.name as recipe').from('dishes').innerJoin('recipes', 'dishes.id', '=', 'recipes.dish_id'
  ).where('dishes.id', id);

  },

  getRecipes: () => {

    return db.select('dishes.name as dish', 'recipes.*').from('recipes').innerJoin('dishes', 'dishes.id', '=', 'recipes.dish_id');

  },

  addRecipe: recipe => {

    return db.insert(recipe).into('recipes').then(ids => { id: ids[0]});

  }

}
