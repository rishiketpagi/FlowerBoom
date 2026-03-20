const express = require("express");
const router = express.Router();
const { getAllFlowers } = require("../controllers/flowerController");

router.get("/", getAllFlowers);

module.exports = router;