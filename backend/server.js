const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const connection = mongoose.connection;
const app = express();
app.use(express.json());

const userRoute = require('./routes/user');
const authenticaitonRoute = require('./routes/authentication');

// mongodb connection establish & error check
const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 5001;

// console.log('+-------------SERVER------------------+');
// console.log('MONGODB_URI ', uri);
// console.log('PORT', port);
// console.log('+-------------------------------------+');

// new url parser is deprecated!
// mongoose.connect(uri, {useNewUrlParser: true});
mongoose.connect(uri);

connection.once('open', () => {
  console.log('Database connection established successfully!!!');
});

connection.on('error', () => {
  console.log('Error connecting to database!');
});

// defining routes
app.use('/newUser', userRoute);
app.use('/auth', authenticaitonRoute);

// default status codes!
app.use((req, res, next) => {
  const err = new Error('Not Found!');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);

  // Send a specific response based on error status
  if (res.statusCode === 404) {
    res.send('Not Found!');
  } else {
    res.send(err.message);
  }
});

app.listen(port, () => {
  console.log('Listening on port :', port);
});
