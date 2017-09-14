
exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe_step", (table) => {
    table.increments("recipestep_id").primary()
    table.integer("recipe_id")
      .references("recipe.recipe_id")
      .onDelete("CASCADE")
    table.integer("step_num")
    table.text("step_direction")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe_step")
};
