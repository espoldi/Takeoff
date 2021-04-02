require('dotenv').config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import passport from 'passport';


//Express Setup
const app = express();
app.use(express.static (__dirname));

const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
});

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: false}));
app.use(expressSession);
app.use(cors());

//passport setup
app.use(passport.initialize());
app.use(passport.session());

//mongoose setup
const CONNECTION_URL = 'mongodb+srv://herokuTakeoff:nardin5heroku@cluster0.84m2b.mongodb.net/Cluster0?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then (() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch ((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port} !`));