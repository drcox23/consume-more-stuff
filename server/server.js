const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const knex = require('./knex/knex.js');
const cors = require('cors');
// const router = express.Router();

const postDrafts = require('./routes/postDraftRoutes');
const commentDrafts = require('./routes/commentDraftRoutes.js')

require('dotenv').config();


const PORT = process.env.EXPRESS_CONTAINER_PORT;

//Models
const Posts = require('./knex/models/Posts.js');
const Comments = require('./knex/models/Comments.js');
const Users = require('./knex/models/Users.js');
// const Transactions = require('./knex/models/Transactions.js');
// const Type = require('./knex/models/Type.js');
const draftPosts = require('./knex/models/draftPosts.js');
const draftComments = require('./knex/models/draftComments.js');
// const archivedPosts = require('./knex/models/archivedPosts.js');
// const archivedComments = require('./knex/models/archivedComments.js');


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

// app.use('/', router)
app.use('/post-draft', postDrafts)
app.use('/comment-draft', commentDrafts)


// get all the posts when any user lands on home page
app.get('/home', (req, res) => {
  Posts
    .fetchAll()
    .then(items => {
      res.json(items)
    })
    .catch(err => {
      console.log("home get error", err)
      res.json(err)
    })
});

// get the post by id
app.get('http://54.201.41.199:9000/post/:id', (req, res) => {
  const id = req.params.id;
  console.log('whats the id', id);

  Posts
    .where({
      id
    })
    .fetch()
    .then(results => {
      const posts = results.toJSON()
      console.log('can i see the posts!!!', posts);
      // const postById = posts[0];
      res.json(posts)
    })
    .catch(err => {
      console.log("post by id error", err)
      res.json(err)
    })

})

// get the comments associated with a post
app.get('http://54.201.41.199:9000/comments/:id', (req, res) => {
  const id = req.params.id;

  Comments
    .where({
      post_id: id
    })
    .fetchAll()
    .then(results => {
      const comments = results.toJSON()
      // console.log('can i see the comments???', comments);
      res.json(comments)
    })
    .catch(err => {
      console.log("comments by id error", err)
      res.json(err)
    })
})

// get the comments that a user has written, maybe not needed
app.get('http://54.201.41.199:9000/mycomments/:id', (req, res) => {
  const id = req.params.id;

  Comments
    .where({
      user_id: id
    })
    .fetchAll()
    .then(results => {
      const comments = results.toJSON()
      console.log('can i see the comments???', comments);
      res.json(comments)
    })
    .catch(err => {
      console.log("my comments by id error", err)
      res.json(err)
    })
})

// add a new post
app.post('http://54.201.41.199:9000/add', (req, res) => {
    const post_data = req.body
    console.log("post data we are adding to DB", req.body)

    Posts
      .forge(post_data)
      .save()
      .then(results => {
        return Posts.fetchAll()
      })
      .then(results => {
        res.json(results.serialize())
      })
      .catch(err => {
        console.log("server post error", err)
        res.json(err)
      })
  });

  // initial post save
  app.post('http://54.201.41.199:9000/save-post', (req, res) => {
    const post_data = req.body
    console.log("post data we are adding to DB", req.body)

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
        console.log("server post error", err)
        res.json(err)
      })
  });

  // initial comment save
  app.post('http://54.201.41.199:9000/save-comment', (req, res) => {
    const comment_data = req.body
    console.log("post data we are adding to DB", req.body)

    draftComments
      .forge(comment_data)
      .save()
      .then(results => {
        return draftComments.fetchAll()
      })
      .then(results => {
        res.json(results.serialize())
      })
      .catch(err => {
        console.log("server post error", err)
        res.json(err)
      })
  });

  
// get the user profile data 
app.get('http://54.201.41.199:9000/user-profile/:id', (req, res) => {
const id = req.params.id

  Users
    .where({id})
    .fetch()
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

