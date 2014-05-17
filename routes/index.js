var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'She-a-Bitch?' });
});


router.get('/about', function(req, res) {
 /* res.send({user1:"sad_man", comment: "he went with another man"}); */
  res.render('about', {title: 'About you'});
});

module.exports = router;
