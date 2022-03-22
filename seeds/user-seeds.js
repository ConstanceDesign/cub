const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "pops2000",
    email: "daddy@gmail.com",
    password: "kidsRgr8",
  },
  {
    username: "mamabear11",
    email: "mommy@gmail.com",
    password: "luvMYbabybear!",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
