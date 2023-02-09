/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const questionData = [
      {
        text: 'Где вода стоит столбом?',
        answer: 'В стакане',
        score: 100,
        topic_id: 1,
      },
      {
        text: 'Шуточные',
        answer: 'sdsdfsdf',
        score: 100,
        topic_id: 1,
      },
      {
        text: 'Шуточные',
        answer: 'sdsdfsdf',
        score: 100,
        topic_id: 1,
      },
      {
        text: 'Шуточные',
        answer: 'sdsdfsdf',
        score: 100,
        topic_id: 1,
      },
      {
        text: 'Где вода стоит столбом?',
        answer: 'В стакане',
        score: 100,
        topic_id: 2,
      },
      {
        text: 'Где вода стоит столбом?',
        answer: 'В стакане',
        score: 100,
        topic_id: 2,
      },
      {
        text: 'Где вода стоит столбом?',
        answer: 'В стакане',
        score: 100,
        topic_id: 2,
      },
      {
        text: 'Где вода стоит столбом?',
        answer: 'В стакане',
        score: 100,
        topic_id: 2,
      },
      {
        text: 'Где вода стоит столбом?',
        answer: 'В стакане',
        score: 100,
        topic_id: 3,
      },
      {
        text: 'Где вода стоит столбом?',
        answer: 'В стакане',
        score: 100,
        topic_id: 3,
      },
      {
        text: 'Где вода стоит столбом?',
        answer: 'В стакане',
        score: 100,
        topic_id: 3,
      },
      {
        text: 'Где вода стоит столбом?',
        answer: 'В стакане',
        score: 100,
        topic_id: 3,
      },
      {
        text: 'Где вода стоит столбом?',
        answer: 'В стакане',
        score: 100,
        topic_id: 4,
      },
      {
        text: 'Где вода стоит столбом?',
        answer: 'В стакане',
        score: 100,
        topic_id: 4,
      },
      {
        text: 'Где вода стоит столбом?',
        answer: 'В стакане',
        score: 100,
        topic_id: 4,
      },
      {
        text: 'Где вода стоит столбом?',
        answer: 'В стакане',
        score: 100,
        topic_id: 4,
      },
    ];
    const questions = questionData.map((question) => ({
      ...question,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Questions', questions);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions');
  },
};
