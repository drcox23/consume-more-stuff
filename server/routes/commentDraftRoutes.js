const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

//Import Models
// const Posts = require('../knex/models/Posts.js');
// const draftPosts = require('../knex/models/draftPosts.js');
// const Users = require('../knex/models/Users.js');
const Comments = require('../knex/models/Comments.js');
// const Transactions = require('../knex/models/Transactions.js');
// const Type = require('../knex/models/Type.js');
const draftComments = require('../knex/models/draftComments.js');
// const archivedPosts = require('../knex/models/archivedPosts.js');
// const archivedComments = require('../knex/models/archivedComments.js');

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router)

// GET /:id - all drafted comments by user id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log("CHECK - GET /:id - id:", id)

  draftComments
    .where({
      user_id: id
    })
    .fetchAll()
    .then(results => {
      const draftComment = results.toJSON()
      res.json(draftComment)
    })
    .catch(err => {
      console.log("\nERROR - GET /:id - all drafts by user id", err);
      res.json(err);
    })
});

// CRUD for saved draft comment
router.route('/:id/:draftId')
  .get((req, res) => {
    const id = req.params.id            //For user_id
    const draftId = req.params.draftId  //post draft id
    console.log("CHECK - GET /:id/:draftId - id:", id);
    console.log("CHECK - GET /:id/:draftId - draftId:", draftId);

    draftComments
      .where({
        user_id: id,
        id: draftId
      })
      .fetch()
      .then(results => {
        const draftComment = results.toJSON()
        res.json(draftComment)
      })
      .catch(err => {
        console.log("\nERROR - GET /:id/:draftId", err)
        res.json(err)
      })
  })

  // Update the drafted post and save
  .put((req, res) => {
    const draftId = req.params.draftId  //post draft id
    const commentDraft_data = req.body
    console.log("PUT - saved draft comment - req.body:", req.body)

    draftComments
      .where({
        id: draftId
      })
      .fetch()
      .then(update => {
        return update.save(commentDraft_data)
      })
      .then(() => {
        return draftComments.where({
          id: draftId
        }).fetch();
      })
      .then(results => {
        res.json(results)
      })
      .catch(err => {
        console.log("ERROR - PUT - saved draft comment:", err)
        res.json(err)
      })

  })

  // Insert the drafted post into Posts table, destroy entry in draftPosts table
  .post((req, res) => {
    const comment_data = req.body
    const draftId = req.params.draftId //comment draft id

    Comments
      .forge(comment_data)
      .save()
      .then(() => {
        return Comments.fetchAll()
      })
      .then(results => {
        res.json(results)
      })
      .then(() => {
        draftComments.where({ id: draftId }).destroy()
      })
      .catch(err => {
        console.log("ERROR - POST - inserting drafted post:", err)
        res.json(err)
      })
  })

module.exports = router