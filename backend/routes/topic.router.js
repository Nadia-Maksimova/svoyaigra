const router = require('express').Router();
const { Topic, Question } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const topics = await Topic.findAll({
      include: {
        model: Question,
        key: 'topic_id',
      },
    });
    res.status(200).json(topics);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
