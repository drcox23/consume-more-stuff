
exports.up = function (knex, Promise) {
    return knex.schema.createTable('posts', function (table) {
      table.increments();
      table.string('subject').notNullable();
      table.string('body', 10000).notNullable();
      table.decimal('price').notNullable().defaultTo(0.00);
      table.integer("type_id").unsigned().notNullable();
      table.foreign('type_id').references('id').inTable('type');
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('id').inTable('users');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('posts');
  }
