const bookshelf = require('./bookshelf')
const Posts = require('./Posts.js');
const Users = require('./Users.js');

const Posts = bookshelf.Model.extend({
  tableName: 'comments',
  post_id: function () {
    return this.belongsTo(Posts, "post_id");
  },
  user_id: function () {
    return this.belongsTo(Users, "user_id");
  },
  idAttribute: 'id',
  hasTimestamps: true
})

module.exports = Posts