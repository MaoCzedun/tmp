var express = require('express'),
    bodyParser = require('body-parser'),
    router = require('./helpers/router').router,
    app = express(),
    port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./public'))
app.use('/api',router);
var server = app.listen(port,function(){
  var host = server.address().address,
      port = server.address().port;
      console.log(`app http://${host}:${port}`);
});
