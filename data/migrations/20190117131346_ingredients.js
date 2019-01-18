
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', tbl => {

    // Primary key: id, autoincrements
    tbl.increments();

    // Other rows

    tbl.string('name').notNullable().unique();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
