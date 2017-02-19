var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let randomIndex = Math.ceil(Math.random() * 9)
  let col1 = Math.floor(Math.random() * 255)
  let col2 = Math.floor(Math.random() * 255)
  let col3 = Math.floor(Math.random() * 255)
  let colors = `rgb(${col1}, ${col2}, ${col3})`
  res.send({index : randomIndex, color: colors })
});

module.exports = router;
