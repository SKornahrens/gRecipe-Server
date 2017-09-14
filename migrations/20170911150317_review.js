
exports.up = function(knex, Promise) {
  return knex.schema.createTable("review", (table) => {
    table.increments("review_id").primary()
    table.text("content")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("review")
};
