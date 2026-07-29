const express = require("express");
const router = express.Router();

const genreController = require("../controller/genreController");
const komikController = require("../controller/komikController");
const userController = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", userController.register);
router.post("/login", userController.login);

router.get("/komik", komikController.getAllKomik);
router.get("/komik/:id", komikController.getKomikById);




module.exports = router;