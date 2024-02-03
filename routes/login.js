var express = require('express');
var LoginController = require("../controllers/LoginController")
var router = express.Router();

router.post('/login', LoginController.login)

module.exports = router;