const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
const path = require("path");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3306;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
