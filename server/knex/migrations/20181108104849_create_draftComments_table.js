exports.up = function(knex, Promise) {
  return knex.schema.createTable('draft_comments', function(table) {
    table.increments();
    table.string('body', 10000).notNullable();
    table
      .integer('post_id')
      .unsigned()
      .notNullable();
    table
      .foreign('post_id')
      .references('id')
      .inTable('posts');
    table
      .integer('user_id')
      .unsigned()
      .notNullable();
    table
      .foreign('user_id')
      .references('id')
      .inTable('users');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('draft_comments');
};
