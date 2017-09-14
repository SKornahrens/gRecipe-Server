
exports.up = function(knex, Promise) {
  return knex.schema.createTable("siteuser", (table) => {
    table.increments("user_id").primary()
    table.text("first_name")
    table.text("last_name")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("siteuser")
};
