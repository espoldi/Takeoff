require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const routes = require('./routes');

//Express Setup
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//db config
const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.84m2b.mongodb.net/Cluster0?retryWrites=true&w=majority`;

//connection to mongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

//passport middleware setup
app.use(passport.initialize());
app.use(passport.session());

// Passport config
require("./config/passport")(passport);

// Routes
app.use(routes);

//setting port for server use
const PORT = process.env.PORT || 3030;
// app listener
app.listen(PORT, () => console.log(`Server listening on port ${PORT} !`));
