require('dotenv').config();
const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const TopicRouter = require('./routes/topic.router');

const app = express();

config(app);
const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use('/api/topics', TopicRouter);

const port = process.env.PORT || 4000;


app.listen(port, () => {
  console.log(`Server is started on ${port} port`);
});
