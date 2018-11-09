
exports.up = function (knex, Promise) {
    return knex.schema.createTable('transaction_history', function (table) {
      table.increments();
      table.integer("post_id").unsigned().notNullable();
      table.foreign('post_id').references('id').inTable('posts');
      table.integer('poster_id').unsigned().notNullable();
      table.foreign('poster_id').references('id').inTable('users');
      table.integer('commenter_id').unsigned().notNullable();
      table.foreign('commenter_id').references('id').inTable('users');
      table.decimal('price').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('transaction_history');
  }
