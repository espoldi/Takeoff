const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const blogRoutes = require('./api/posts');

// API Routes
router.use("/api", apiRoutes);
router.use('/posts', blogRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '/'));
});

module.exports = router;
