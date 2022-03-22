const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Post extends Model {
  static upvote(body, models) {
    return models.Approval.create({
      user_id: body.user_id,
      post_id: body.post_id,
    }).then(() => {
      return Post.findOne({
        where: {
          id: body.post_id,
        },
        attributes: [
          "id",
          "post_url",
          "title",
          "created_at",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM approval WHERE post.id = approval.post_id)"
            ),
            "approval_count",
          ],
        ],
        include: [
          {
            model: models.Comment,
            attributes: [
              "id",
              "comment_text",
              "post_id",
              "user_id",
              "created_at",
            ],
            include: {
              model: models.User,
              attributes: ["username"],
            },
          },
        ],
      });
    });
  }
}

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
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true,
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
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
