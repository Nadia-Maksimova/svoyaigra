const router = require('express').Router();
const { Topic, Question } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const Topics = await Topic.findAll({
      include:
             {
               model: Question,
               key: 'topic_id',
             },
    });
    res.status(200).json(Topics);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
