const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
router.use("/users", apiRoutes); 

module.exports = router;