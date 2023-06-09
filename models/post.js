const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogPost: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 500],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    // createdAt: "created_at",
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
