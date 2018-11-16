const express = require('express');
const PORT = process.env.EXPRESS_CONTAINER_PORT;
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// const RedisStore = require('connect-redis')(session);
// const passport = require('passport');
// const session = require('express-session');

require('dotenv').config();

//Import Models
const Posts = require('./knex/models/Posts.js');
const Comments = require('./knex/models/Comments.js');
const Users = require('./knex/models/Users.js');
// const Transactions = require('./knex/models/Transactions.js');
const Type = require('./knex/models/Type.js');
const draftPosts = require('./knex/models/draftPosts.js');
const draftComments = require('./knex/models/draftComments.js');
// const archivedPosts = require('./knex/models/archivedPosts.js');
// const archivedComments = require('./knex/models/archivedComments.js');
const postDrafts = require('./routes/postDraftRoutes');
const commentDrafts = require('./routes/commentDraftRoutes.js')

//Setup for Redis
// app.use(session({
//   store: new RedisStore({url: 'redis://redis:6379', logErrors: true}),
//   secret: 'p1',
//   resave: false,
//   saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/', router)
app.use('/post-draft', postDrafts)
app.use('/comment-draft', commentDrafts)


// GET /home - all the posts when any user lands on home page
app.get('/home', (req, res) => {
  console.log("\nGET /home...");
  Posts
    .fetchAll()
    .then(items => {
      res.json(items)
    })
    .catch(err => {
      console.log("\nERROR - GET /home:", err)
      res.json(err)
    })
});

// GET /post/:id - post by id
app.get('/post/:id', (req, res) => {
  console.log("\nGET /post/:id...")
  const id = req.params.id;
  console.log('\nCHECK id:', id);

  Posts
    .where({
      id
    })
    .fetch()
    .then(results => {
      const posts = results.toJSON()
      console.log('\nCHECK posts:', posts);
      // const postById = posts[0];
      res.json(posts)
    })
    .catch(err => {
      console.log("\nERROR - GET /post/:id:", err)
      res.json(err)
    })

})

// GET /comments/:id - comments associated with post
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;

  Comments
    .where({
      post_id: id
    })
    .fetchAll()
    .then(results => {
      const comments = results.toJSON()
      console.log('CHECK - comments:', comments);
      res.json(comments)
    })
    .catch(err => {
      console.log("ERROR - GET /comments/:id:", err)
      res.json(err)
    })
})

// get the comments that a user has written, maybe not needed
app.get('/mycomments/:id', (req, res) => {
  const id = req.params.id;

  Comments
    .where({
      user_id: id
    })
    .fetchAll()
    .then(results => {
      const comments = results.toJSON()
      console.log('CHECK - comments:', comments);
      res.json(comments)
    })
    .catch(err => {
      console.log("ERROR - GET /mycomments/:id:", err)
      res.json(err)
    })
})

// POST /add - add a new post
app.post('/add', (req, res) => {
  console.log("POST - /add req.body:", req.body);
  const post_data = req.body

  Posts
    .forge(post_data)
    .save()
    .then(() => {
      return Posts.fetchAll()
    })
    .then(results => {
      res.json(results.serialize())
    })
    .catch(err => {
      console.log("ERROR - POST /add:", err)
      res.json(err)
    })
});

// POST /save-post - initial save post
app.post('/save-post', (req, res) => {
  const post_data = req.body
  console.log("POST /save-post - req.body:", req.body)

  draftPosts
    .forge(post_data)
    .save()
    .then(results => {
      return draftPosts.fetchAll()
    })
    .then(results => {
      res.json(results.serialize())
    })
    .catch(err => {
      console.log("ERROR - POST /save-post:", err)
      res.json(err)
    })
});

// POST /save-comment - initial comment save
app.post('/save-comment', (req, res) => {
  const comment_data = req.body
  console.log("POST /save-comment - req.body:", req.body)

  draftComments
    .forge(comment_data)
    .save()
    .then(() => {
      return draftComments.fetchAll()
    })
    .then(results => {
      res.json(results.serialize())
    })
    .catch(err => {
      console.log("ERROR - POST /save-comment:", err)
      res.json(err)
    })
});

// GET /user-profile/:id - get the user profile data 
app.get('/user-profile/:id', (req, res) => {
  const id = req.params.id

  Users
    .where({ id })
    .fetch()
    .then(items => {
      res.json(items)
    })
    .catch(err => {
      console.log("user-profile get error", err)
      res.json(err)
    })
})

app.get('/user-profile/email/:email', (req, res) => {
  const { email } = req.params;

  Users
    .query(function (qb) {
      qb.whereRaw(`email LIKE ?`, [`%${email}%`])
    })
    .fetch()
    .then(items => {
      res.json(items)
    })
    .catch(err => {
      console.log("ERROR - GET /user-profile/:id :", err)
      res.json(err)
    })
})

app.get('/type', (req, res) => {

  Type
    .fetchAll()
    .then(items => {
      res.json(items)
    })
    .catch(err => {
      console.log("user-profile get error", err)
      res.json(err)
    })
})

// *********


app.get('*', (req, res) => {
  res.json('404 error, this is the last item before app.listen on the server.js file');
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})

