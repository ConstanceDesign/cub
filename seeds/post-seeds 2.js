const { Post } = require("../models");

const postdata = [
  {
    title: "Soccer",
    post_url: "https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png",
    user_id: 1,
  },
  {
    title: "Report Card",
    post_url: "https://nasa.gov/donec.json",
    user_id: 2,
  },
  {
    title: "Family Party",
    post_url:
      "https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx",
    user_id: 1,
  },
  {
    title: "School Trip",
    post_url: "http://desdev.cn/enim/blandit/mi.jpg",
    user_id: 2,
  },
  {
    title: "Allergist Appointment",
    post_url: "http://google.ca/nam/nulla/integer.aspx",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
