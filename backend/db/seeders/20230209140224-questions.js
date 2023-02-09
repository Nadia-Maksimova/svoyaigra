/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const questionData = [
      {
        text: 'В 2003-м году ЭТОТ мультфильм был признан лучшим мультфильмом всех времён и народов по результатам опроса 140 кинокритиков и мультипликаторов разных стран.',
        answer: 'Ёжик в тумане',
        score: 100,
        topic_id: 1,
      },
      {
        text: 'В 2007 году ОН занял первое место в списке журнала «Forbes», как самый богатый вымышленный персонаж.',
        answer: 'Скрудж Макдак',
        score: 250,
        topic_id: 1,
      },
      {
        text: 'В мультсериале «Чип и Дейл спешат на помощь» есть персонаж как Гайка. Назовите её оригинальное имя',
        answer: 'Гаджет',
        score: 500,
        topic_id: 1,
      },
      {
        text: 'В этом мультсериале есть, например, белка из Техаса в скафандре',
        answer: 'Губка Боб квадратные штаны',
        score: 1000,
        topic_id: 1,
      },
      {
        text: 'Загадай число от 1 до 1489',
        answer: '1',
        score: 1000,
        topic_id: 2,
      },
      {
        text: 'Загадай число от 1 до 1489',
        answer: '2',
        score: 1000,
        topic_id: 2,
      },
      {
        text: 'Загадай число от 1 до 1489',
        answer: '4',
        score: 1000,
        topic_id: 2,
      },
      {
        text: 'Загадай число от 1 до 1489',
        answer: '69',
        score: 1000,
        topic_id: 2,
      },
      {
        text: "Что выведется в консоль? console.log(11 + '11' + undefined)",
        answer: '1111undefined',
        score: 100,
        topic_id: 3,
      },
      {
        text: ' Что возвращает данная функция: const a = [1, 2, 3];const doubled = a.forEach((num, index) => {return ?});',
        answer: 'НИЧЕГО ;));););))',
        score: 250,
        topic_id: 3,
      },
      {
        text: 'Что такое цель события или целевой элемент (event.target)?',
        answer: 'Простыми словами, event.target — это элемент, в котором происходит событие, или элемент, вызвавший событие.',
        score: 500,
        topic_id: 3,
      },
      {
        text: 'что выведет console.log(1 + 1)',
        answer: 'два',
        score: 1000,
        topic_id: 3,
      },
      {
        text: 'как меня зовут',
        answer: 'владимир, но папич говорит владимир и владислав это одно имя',
        score: 1000,
        topic_id: 4,
      },
      {
        text: 'сколько у меня мам?',
        answer: 'три (мама, джулия, аня)',
        score: 5000,
        topic_id: 4,
      },
      {
        text: 'моя цель обучения это?',
        answer: 'носки, но с недавних пор узнал о сумке, теперь цели две',
        score: 15000,
        topic_id: 4,
      },
      {
        text: 'кто меня любит?',
        answer: 'все кроме димы, лейла тоже под вопросом',
        score: 99999,
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
