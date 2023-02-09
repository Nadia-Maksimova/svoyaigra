/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const topicData = [
      {
        title: 'душные вопросы про мультики',
      },
      {
        title: 'е***** рот этого казино',
      },
      {
        title: 'у меня нет личной жизни',
      },
      {
        title: 'всем привет я вова',
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
