
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('username').notNullable();
    table.unique('username');
    table.string('password').notNullable();
    table.string('email').notNullable();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.decimal('account_credit').notNullable().defaultTo(0.00);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users');
}
