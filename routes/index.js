var express = require('express');
var router = express.Router();
var TRACKID, DRIVER, LONGITUDE, LATITUDE;

const remoteRepo='https://apigw.withoracle.cloud/formulaai/sessions';


var https = require('https');
https.get(remoteRepo,(res) => {
  let body1 = "";
  res.on("data", (chunk) => {
      body1 += chunk;
  });
  res.on("end", () => {
      try {
          json1 = JSON.parse(body1);
          console.log("Archivo guardado");
          console.log('Longitud de archivo: '+json1.length);
        }
      catch (error) {
          console.error(error.message);
      };
  });
});


/* GET home page. */
router.get('/trackid/:t_id/', function(req, res, next){
  //res.send('Hello World!');
  //res.render('index', { title: 'Express' });
  /*
  res.json(
    {
      "trackId": req.params.t_id,
      "name": "Texas",
      "longitude": 13242315,
      "latitude": 5678659
    }
  )
  */
  var output=[];
  if(json1){
    for(var i=0; i<json1.length; i++){
      if(json1[i].TRACKID==req.params.t_id)
      {
        output.push(json1[i]);   
      }
    }
    res.json( output )
  }
})

module.exports = router;
