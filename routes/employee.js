var express = require('express');
var router = express.Router();
var EmployeeController = require("../controllers/EmployeeController")

router.get('/', EmployeeController.index);
router.get('/show', EmployeeController.show);
router.post('/create', EmployeeController.store);
router.put('/update', EmployeeController.update);
router.delete('/destroy', EmployeeController.destroy);

module.exports = router;