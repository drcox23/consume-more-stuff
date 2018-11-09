const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const knex = require('./knex/knex.js');
const cors = require('cors');

const PORT = process.env.EXPRESS_CONTAINER_PORT;

//Models
const Users = require('./knex/models/Users.js');
const Posts = require('./knex/models/Posts.js');
const Comments = require('./knex/models/Comments.js');
const Transactions = require('./knex/models/Transactions.js');
const Type = require('./knex/models/Type.js');
const draftPosts = require('./knex/models/draftPosts.js');
const draftComments = require('./knex/models/draftComments.js');
const archivedPosts = require('./knex/models/archivedPosts.js');
const archivedComments = require('./knex/models/archivedComments.js');


//Redis Stuff
// const RedisStore = require('connect-redis')(session);
// const passport = require('passport');
// const session = require('express-session');

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
app.use(bodyParser.urlencoded({
  extended: true
}));


// get all the posts when any user lands on home page
app.get('/home', (req, res) => {
  Posts
    .fetchAll()
    .then(items => {
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('error', err)
    })
});


app.get('/post/:id', (req, res) => {
  const id = req.params.id;
  console.log('whats the id', id);

  let postdata = []

  Posts
    .where({id})
    .fetch()
    .then(results => {
      const posts = results.toJSON()
      console.log('can i see the posts!!!', posts);
      // const postById = posts[0];
      postdata.push(posts)
    })
  Comments
    .where({post_id: id})
    .fetchAll()
    .then(results => {
      const comments = results.toJSON()
      console.log('can i see the comments???', comments);
      postdata.push(comments)
      res.json(postdata)
    })
    .catch(err => {
      console.log("post by id error", err)
    })
})

// get the post by id along with the ALL the comments associated with it. 
// app.get('/post/:id', (req, res) => {
//   const id = req.params.id;
//   console.log("post parameters", id);
//   Posts
//     .where({id})
//     .fetch()
//     .then(results => {
//       const posts = results.toJSON()
//       // console.log('can i see the posts!!!', posts);
//       // const postById = posts[0];
//       // res.json(posts)
//     })
//   Comments
//     .where({post_id: id})
//     .fetchAll()
//     .then(results => {
//       const comments = results.toJSON()
//       console.log('can i see the comments???', comments)
//       // res.json(comments)
//     })
//     .catch(err => {
//       console.log("post by id error", err)
//     })
// });

app.get('*', (req, res) => {
  res.json('404 error, this is the last item before app.listen on the server.js file');
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})