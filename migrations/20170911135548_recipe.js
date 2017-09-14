
exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe", (table) => {
    table.increments("recipe_id").primary()
    table.integer("user_id")
      .references("siteuser.user_id")
      .onDelete("CASCADE")
    table.text("name")
    table.text("description")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe")
};
