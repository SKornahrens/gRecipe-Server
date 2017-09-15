
exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredient_recipe", (table) => {
    table.increments("ingredientrecipe_id").primary()
    table.integer("recipe_id")
      .references("recipe.recipe_id")
      .onDelete("CASCADE")
    table.integer("ingredient_id")
      .references("ingredient.ingredient_id")
      .onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredient_recipe")
};
