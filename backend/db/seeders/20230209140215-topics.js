/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const topicData = [
      {
        title: 'Шуточные',
      },
      {
        title: 'Фильмы',
      },
      {
        title: 'Для умных',
      },
      {
        title: 'вопросы от вовы',
      },
    ];
    const topics = topicData.map((topic) => ({
      ...topic,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Topics', topics);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Topics');
  },
};
