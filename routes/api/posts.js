const router = require("express").Router();

// Book routes
router.get("/", (req, res) => {
    res.send('THIS WORKS!')
});

module.exports = router;
