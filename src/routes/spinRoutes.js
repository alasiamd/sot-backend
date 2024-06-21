const { Router } = require("express");
const { createSpin } = require("../controllers/index");

const router = Router();

router.post("/", createSpin);

module.exports = router;
