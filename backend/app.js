require('dotenv').config();
const express = require('express');
const config = require('./config/config');
const TopicRouter = require('./routes/topic.router');

const app = express();

config(app);

app.use('/api/topics', TopicRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is started on ${port} port`);
});
