const express = require('express');
// const mongoose = require('mongoose')

// const keys = require('./config/keys');

const app = express();

app.use(express.json());

// mongoose.connect(keys.mongoURI);
require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  //making sure express will serve up production assets
  //like main.js and main.css
  app.use(express.static('client/build'));

  //Express will serve index.html if it doesnt
  //recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
