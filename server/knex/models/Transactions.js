const bookshelf = require('./bookshelf')
const Posts = require('./Posts.js');
const Users = require('./Users.js');

const Transactions = bookshelf.Model.extend({
  tableName: 'transaction_history',
  post_id: function () {
    return this.belongsTo(Posts, "post_id");
  },
  poster_id: function () {
    return this.belongsTo(Users, "poster_id");
  },
  commenter_id: function () {
    return this.belongsTo(Users, "commenter_id");
  },
  idAttribute: 'id',
  hasTimestamps: true
})

module.exports = Transactions