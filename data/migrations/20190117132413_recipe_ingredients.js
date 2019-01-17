
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', tbl => {

    // Rows

    tbl.float('quantity').notNullable();

    // Foreign Keys

    tbl.integer('recipe_id').notNullable().references('id').inTable('recipes');
    tbl.integer('ingredient_id').notNullable().references('id').inTable('ingredients');
    tbl.integer('unit_id').references('id').inTable('unit_measurements');

    // Primary key: combo of recipe and ingredient IDs
    tbl.primary(['recipe_id', 'ingredient_id']);

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};
