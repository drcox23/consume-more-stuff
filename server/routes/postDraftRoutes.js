const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const knex = require('../knex/knex.js');
const router = express.Router();


//Models
const Posts = require('../knex/models/Posts.js');
const draftPosts = require('../knex/models/draftPosts.js');
// const Users = require('../knex/models/Users.js');
// const Comments = require('../knex/models/Comments.js');
// const Transactions = require('../knex/models/Transactions.js');
// const Type = require('../knex/models/Type.js');
// const draftComments = require('../knex/models/draftComments.js');
// const archivedPosts = require('../knex/models/archivedPosts.js');
// const archivedComments = require('../knex/models/archivedComments.js');

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', router)

// get all drafted posts by user id
router.get('/:id', (req, res) => {
  const id = req.params.id

  draftPosts
    .where({
      user_id: id
    })
    .fetchAll()
    .then(results => {
      const draftPosts = results.toJSON()
      res.json(draftPosts)
    })
    .catch(err => {
      console.log("get all drafts error", err)
    })
});

// CRUD for saved draft items
router.route('/:id/:draftId')
  .get((req, res) => {
    const id = req.params.id //supposed to be for userid
    const draftId = req.params.draftId //post draft id

    draftPosts
      .where({
        user_id: id,
        id: draftId
      })
      .fetch()
      .then(results => {
        const draftPost = results.toJSON()
        res.json(draftPost)
      })
      .catch(err => {
        console.log("drafts by id error", err)
      })
  })

  // update the drafted post and save.
  .put((req, res) => {

    const draftId = req.params.draftId //post draft id

    const postDraft_data = req.body
    console.log("post data we are adding to DB", req.body)

    draftPosts
      .where({
        id: draftId
      })
      .fetch()
      .then(update => {
        return update.save(postDraft_data)
      })
      .then(data => {
        return draftPosts.where({
          id: draftId
        }).fetch();
      })
      .then(results => {
        res.json(results)
      })
      .catch(err => {
        console.log("draftPost error", err)
        res.json(err)
      })

  })

  // insert the drafted post into Posts table, destroy entry in draftPosts table
  .post((req, res) => {
    const post_data = req.body
    const draftId = req.params.draftId //post draft id

    // console.log("post data we are adding to DB", req.body)

    Posts
      .forge(post_data)
      .save()
      .then(results => {
        return Posts.fetchAll()
      })
      .then(results => {
        res.json(results)
      })
      .then( () => {
        draftPosts.where({id: draftId}).destroy()
      })
      .catch(err => {
        console.log("server post error", err)
      })
  })

  module.exports = router