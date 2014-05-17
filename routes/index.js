var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var jsonObject = {
	'title':'She-a-Bitch?',
	'version':'v1',
	'description':'web app that allows people to bitch about anybody, anonymously'
	};
  res.json(jsonObject);
});


router.get('/about', function(req, res) {
 /* res.send({user1:"sad_man", comment: "he went with another man"}); */
  res.render('about', {title: 'About you'});
});

module.exports = router;
