var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/trackid/:t_id/', function(req, res, next){
  //res.send('Hello World!');
  //res.render('index', { title: 'Express' });
  res.json(
    {
      "trackId": req.params.t_id,
      "name": "Texas",
      "longitude": 13242315,
      "latitude": 5678659
    }
  )
});

module.exports = router;
