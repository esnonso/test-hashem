const express = require("express");
const router = express.Router();

const { createUser } = require("../controllers/users");

router.get("/", (req, res) => res.send("connected"));

router.post("/create", createUser);

module.exports = router;
