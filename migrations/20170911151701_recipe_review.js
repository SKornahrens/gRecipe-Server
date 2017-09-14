
exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe_review", (table) => {
    table.integer("recipe_id")
      .references("recipe.recipe_id")
      .onDelete("CASCADE")
    table.integer("review_id")
      .references("review.review_id")
      .onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe_review")
};
