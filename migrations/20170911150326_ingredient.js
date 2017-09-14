
exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredient", (table) => {
    table.increments("ingredient_id").primary()
    table.text("name")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredient")
};
