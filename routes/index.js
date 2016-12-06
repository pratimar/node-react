var express = require('express');

var router = express.Router(); //Use in-built router

router.get('/', function(req, res) {
	res.render('index', {name: 'React-Node'});
});

module.exports = router; //need to export; as it is being 'require'd in app.js
