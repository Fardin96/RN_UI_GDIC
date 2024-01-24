const express = require('express');
const mongoose = require('mongoose');
const connection = mongoose.connection;
const app = express();

const uri =
  'mongodb+srv://fardinshuvro96:<password>@gdiltakehome.jveazcn.mongodb.net/?retryWrites=true&w=majority';
const port = process.env.PORT || 5001;

mongoose.connect(uri, {useNewUrlParser: true});

connection.once('open', () => {
  console.log('Database connection established successfully!!!');
});

connection.on('error', () => {
  console.log('Error connecting to database!');
});

app.listen(port, () => {
  console.log('Listening on port :', port);
});
