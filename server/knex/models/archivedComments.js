const bookshelf = require('./bookshelf')
const Posts = require('./Posts.js');
const Users = require('./Users.js');

const draftComments = bookshelf.Model.extend({
  tableName: 'draft_comments',
  post_id: function () {
    return this.belongsTo(Posts, "post_id");
  },
  user_id: function () {
    return this.belongsTo(Users, "user_id");
  },
  idAttribute: 'id',
  hasTimestamps: true
})

module.exports = draftComments