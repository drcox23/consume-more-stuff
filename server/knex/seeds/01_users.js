
exports.seed = function (knex, Promise) {

  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {

      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'fake1',
          password: "123",
          email: 'fake1@gmail.com',
          first_name: 'Wymin',
          last_name: 'Chan',
          account_credit: 100.00
        },
        {
          username: 'fake2',
          password: "123",
          email: 'fake2.ee@gmail.com',
          first_name: 'May',
          last_name: 'Chen',
          account_credit: 100.00
        },
        {
          username: 'fake3',
          password: "123",
          email: 'fake3@gmail.com',
          first_name: 'Douglas',
          last_name: 'Cox',
          account_credit: 100.00
        },
        {
          username: 'fake4',
          password: "123",
          email: 'fake4@gmail.com',
          first_name: 'Chaz',
          last_name: 'Kondo',
          account_credit: 100.00
        }
      ]);
    });
};
