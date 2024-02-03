var express = require('express');
var UserController = require("../controllers/UsersController")
var router = express.Router();

/* GET users listing. */
router.get('/', UserController.index);
router.post('/create', UserController.store);
router.put("/update", UserController.update)
router.delete('/destroy', UserController.destroy);

module.exports = router;
