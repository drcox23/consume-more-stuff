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
app.use(bodyParser.urlencoded({ extended: true }));



app.get('*', (req, res) => {
  res.json('404 error, this is the last item before app.listen on the server.js file');
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})