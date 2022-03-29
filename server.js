const fs = require("fs");
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: "super secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// const helpers = require("./__tests__/helpers");

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

// app.use(express.static("./public/images"));

// app.get("/", (req, res) => {
//   res.render("index", {
//     greeting: "Welcome to Cub Kin Coparenting",
//   });
// });

// app.get("/single-post", (req, res) => {
//   res.render("single-post", {
//     greeting: "Your Name Goes Here",
//   });
// });

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.querySelector("#copyright-year").innerText = new sequelize.sync({
  force: false,
}).then(() => {
  app.listen(PORT, () => console.log(`Now listening ${PORT}!`));
});
