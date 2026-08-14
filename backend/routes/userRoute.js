const express = require("express");
const router = express.Router();

const { deleteUser } = require("../controllers/userController");

router.delete("/:id", deleteUser);

module.exports = router;