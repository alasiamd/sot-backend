const { Router } = require("express");
const gameRoutes = require("./gameRoutes");
const spinRoutes = require("./spinRoutes");

const router = Router();

router.use("/games", gameRoutes);
router.use("/spins", spinRoutes);

module.exports = router;
