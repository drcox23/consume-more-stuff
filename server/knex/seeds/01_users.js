
exports.seed = function (knex, Promise) {

  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {

      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'wyminc808',
          password: "123",
          email: 'Wymin Chan',
          first_name: 'Wymin',
          last_name: 'Chan',
          account_credit: 100.00
        },
        {
          username: 'maychen.ee',
          password: "123",
          email: 'May Chen',
          first_name: 'May',
          last_name: 'Chen',
          account_credit: 100.00
        },
        {
          username: 'drcox23',
          password: "123",
          email: 'Doug Cox',
          first_name: 'Douglas',
          last_name: 'Cox',
          account_credit: 100.00
        },
        {
          username: 'chuckeekondo',
          password: "123",
          email: 'Chaz Kondo',
          first_name: 'Chaz',
          last_name: 'Kondo',
          account_credit: 100.00
        }
      ]);
    });
};
