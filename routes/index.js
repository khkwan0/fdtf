var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Freeze Dried Thai Fruits' });
});

router.get('/de', (req, res, next) => {
  res.render('index_de.html', { title: 'Freeze Dried Thai Fruits' });
});

router.get('/cn', (req, res, next) => {
  res.render('index_cn.html', { title: 'Freeze Dried Thai Fruits' });
});

module.exports = router;
