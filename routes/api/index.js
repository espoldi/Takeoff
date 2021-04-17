const router = require("express").Router();
// Routes
const userRoutes = require("./users");
const postRoutes = require("./posts");
const tripRoutes = require("./trips");
const itineraryRoutes = require("./itineraryItems");

router.use("/users", userRoutes);
router.use("/trips", tripRoutes);
router.use("/itinerary", itineraryRoutes);
router.use("/posts", postRoutes);

module.exports = router;
