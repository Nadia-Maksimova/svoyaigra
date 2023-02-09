const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Topic }) {
      this.belongsTo(Topic, { foreignKey: 'topic_id' });
    }
  }
  Question.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      text: {
        type: DataTypes.TEXT,
      },
      answer: {
        type: DataTypes.TEXT,
      },
      score: {
        type: DataTypes.INTEGER,
      },
      topic_id: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
