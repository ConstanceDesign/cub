const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./messages-routes.js");

router.use("/", homeRoutes);
router.use("/messages", dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;
