require('dotenv').config();
const express = require('express');
const config = require('./config/config');

const app = express();

config(app);
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is started on ${port} port`);
});
