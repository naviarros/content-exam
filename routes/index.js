var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login/login');
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard/dashboard')
})

router.get('/add', function(req, res, next){
  res.render('dashboard/add_employee')
})

module.exports = router;
