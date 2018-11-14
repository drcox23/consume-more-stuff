
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'wyminc',
          password: "123",
          email: 'wyminc808@gmail.com',
          first_name: 'Wymin',
          last_name: 'Chan',
          account_credit: 100.00
        },
        {
          username: 'maymc',
          password: "123",
          email: 'maychen.ee@gmail.com',
          first_name: 'May',
          last_name: 'Chen',
          account_credit: 100.00
        },
        {
          username: 'drcox23',
          password: "123",
          email: 'drcox23@gmail.com',
          first_name: 'Douglas',
          last_name: 'Cox',
          account_credit: 100.00
        },
        {
          username: 'demifire',
          password: "123",
          email: 'chuckeekondo@gmail.com',
          first_name: 'Chaz',
          last_name: 'Kondo',
          account_credit: 100.00
        }
      ]);
    });
};
