const User = require("./User");
const Post = require("./Post");
const Approval = require("./Approval");

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

Approval.hasMany(Vote, {
  foreignKey: "user_id",
});

Approval.hasMany(Vote, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Approval };
