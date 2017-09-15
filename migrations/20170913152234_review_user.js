
exports.up = function(knex, Promise) {
  return knex.schema.createTable("review_user", (table) => {
    table.increments("recipereview_id").primary()
    table.integer("user_id")
      .references("siteuser.user_id")
      .onDelete("CASCADE")
    table.integer("review_id")
      .references("review.review_id")
      .onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("review_user")
};
