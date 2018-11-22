const bookshelf = require('./bookshelf')
const Posts = require('./Posts.js');
const Users = require('./Users.js');

const archivedComments = bookshelf.Model.extend({
  tableName: 'archived_comments',
  post_id: function () {
    return this.belongsTo(Posts, "post_id");
  },
  user_id: function () {
    return this.belongsTo(Users, "user_id");
  },
  idAttribute: 'id',
  hasTimestamps: true
})

module.exports = archivedComments;