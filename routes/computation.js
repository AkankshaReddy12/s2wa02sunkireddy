var express = require('express');
const { param } = require('./users');
var router = express.Router();
var  a= Math.random().toFixed(2);


console.log(a);
/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.query.a != undefined) {
    a = req.query.a;
  }
   
  res.render('computation', { Calculate: 'Cube root of ' +a+' is '+Math.cbrt(a)});
});
module.exports = router;