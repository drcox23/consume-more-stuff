
exports.seed = function (knex, Promise) {

  // Deletes ALL existing entries
  return knex('type').del()
    .then(function () {

      // Inserts seed entries
      return knex('type').insert([
        {
          type: 'idea'
        },
        {
          type: 'image'
        },
        {
          type: 'video'
        },
        {
          type: 'review'
        }
      ]);
    });
};
