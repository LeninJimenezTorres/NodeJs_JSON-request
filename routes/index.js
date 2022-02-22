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
  var aux={};
  if(json1){
    for(var i=0; i<json1.length; i++){
      if(json1[i].TRACKID==req.params.t_id)
      {
        aux={
          "trackId": json1[i].TRACKID,
          "name": json1[i].DRIVER,
          "longitude": 13242315,
          "latitude": 5678659, 
          "importantEvents": [
            { "date": 5678659,
             "descrition": "In August 2009, Formula One president Bernie Ecclestone remarked that there was no immediate plan to return Formula One to the US, vowing never to return to Indianapolis. Nevertheless, shortly before the first race of the 2010 season, Ecclestone continued to fuel speculation that a return to Indianapolis was not out of the question"},
            { "date": 5678659,
             "descrition": "It was not until 2000 that another United States Grand Prix took place, this time at the Indianapolis Motor Speedway in Indiana. Indianapolis was rumored to have been considering a Formula One race since the USGP left Phoenix; with a proposed street race for the 1990 season in downtown Indianapolisn"}
            ]
        }
        output.push(aux);   
      }
    }
    res.json( output )
  }
})

module.exports = router;
