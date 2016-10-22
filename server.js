var express = require('express'),
  cors = require('cors'),
  app = express(),
  https = require('https');

app.get('/buildTypes', cors(), function (req, res, next) {
  var str = '';
  https.get({
    hostname: 'teamcity.jetbrains.com',
    path: '/guestAuth/app/rest/buildTypes?fields=buildType(id,name,builds($locator(running:false,canceled:false,count:1),build(number,status)))',
    headers: {
      Accept: 'application/json'
    }
  }, response => {
    response.on('data', function (d) {
      str += d;
    });

    response.on('end', function (d) {
      res.send(str);
    });
  });
});

app.listen(8080, function(){
  console.log('CORS-enabled web server listening on port 8080');
});
