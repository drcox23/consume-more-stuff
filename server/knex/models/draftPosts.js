const bookshelf = require('./bookshelf')
const Type = require('./Type.js');
const Users = require('./Users.js');

const draftPosts = bookshelf.Model.extend({
  tableName: 'draft_posts',
  type_id: function () {
    return this.belongsTo(Type, "type_id");
  },
  user_id: function () {
    return this.belongsTo(Users, "user_id");
  },
  idAttribute: 'id',
  hasTimestamps: true
})

module.exports = draftPosts