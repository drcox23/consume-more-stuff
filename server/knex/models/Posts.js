const bookshelf = require('./bookshelf')
const Type = require('./Type.js');
const Users = require('./Users.js');

const Posts = bookshelf.Model.extend({
  tableName: 'posts',
  type_id: function () {
    return this.belongsTo(Type, "type_id");
  },
  user_id: function () {
    return this.belongsTo(Users, "user_id");
  },
  idAttribute: 'id',
  hasTimestamps: true
})

module.exports = Posts