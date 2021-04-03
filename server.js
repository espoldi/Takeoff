require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const users = require('./routes/api/users');

//Express Setup
const app = express();
//app.use(express.static (__dirname));

// const expressSession = require('express-session')({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: false
// });

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: false }));
//app.use(expressSession);
//app.use(cors());

//db config
const db = require("./config/keys").mongoURI;

//connection to mongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
    .then (() => console.log("MongoDB successfully connected"))
    .catch ((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

//passport middleware setup
app.use(passport.initialize());
//app.use(passport.session());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

//setting port for server use
const PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log(`Server listening on port ${PORT} !`));