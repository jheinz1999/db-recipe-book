
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {

    // Primary key: id, autoincrements
    tbl.increments();

    // Other rows

    tbl.string('name').notNullable().unique();
    tbl.string('instructions').notNullable();

    // Foreign keys

    tbl.integer('dish_id').unsigned().references('id').inTable('dishes');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
