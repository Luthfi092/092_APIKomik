const express = require("express");
const router = express.Router();

const genreController = require("../controller/genreController");
const komikController = require("../controller/komikController");
const userController = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");




module.exports = router;