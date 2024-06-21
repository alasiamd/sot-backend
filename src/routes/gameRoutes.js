const { Router } = require("express");
const { createGame, endGame } = require("../controllers/index");

const router = Router();

router.post("/", createGame);
router.put("/:id", endGame);

module.exports = router;
