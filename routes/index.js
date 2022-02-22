var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send('Hello World!');
  //res.render('index', { title: 'Express' });
  res.json(
    {
      "trackId": 1234,
      "name": "Texas",
      "longitude": 13242315,
      "latitude": 5678659
    }
  )
});

module.exports = router;
