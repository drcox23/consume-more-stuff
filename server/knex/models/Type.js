const bookshelf = require('./bookshelf')

const Type = bookshelf.Model.extend({
  tableName: 'type',
  idAttribute: 'id',
  hasTimestamps: true
})

module.exports = Type