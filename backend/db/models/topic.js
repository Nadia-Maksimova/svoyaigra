const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate({ Question }) {
      this.hasMany(Question, { foreignKey: 'topic_id' });
    }
  }
  Topic.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.TEXT,
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
      modelName: 'Topic',
    }
  );
  return Topic;
};
