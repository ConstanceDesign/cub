// import all models
const Post = require("./Post");
const User = require("./User");
const Approval = require("./Approval");
const Comment = require("./Comment");

// create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

User.belongsToMany(Post, {
  through: Approval,
  as: "approved_posts",
  foreignKey: "user_id",
});

Post.belongsToMany(User, {
  through: Approval,
  as: "approved_posts",
  foreignKey: "post_id",
});

Approval.belongsTo(User, {
  foreignKey: "user_id",
});

Approval.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Approval, {
  foreignKey: "user_id",
});

Post.hasMany(Approval, {
  foreignKey: "post_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Approval, Comment };
