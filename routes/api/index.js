const router = require("express").Router();
// Routes
const userRoutes = require("./users");
const postRoutes = require("./posts");
const tripRoutes = require("./trips");
const itineraryRoutes = require("./itineraryItems");
const bucketListRoutes = require("./bucketList");

router.use("/users", userRoutes);
router.use("/trips", tripRoutes);
router.use("/itinerary", itineraryRoutes);
router.use("/posts", postRoutes);
router.use("/bucketlist", bucketListRoutes);

module.exports = router;
