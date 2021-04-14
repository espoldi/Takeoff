const router = require("express").Router();
const userRoutes = require("./users");

// All routes
router.use("/users", userRoutes);

module.exports = router;
