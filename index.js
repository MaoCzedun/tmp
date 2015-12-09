var express = require('express'),
    bodyParser = require('body-parser'),
    config=require('./config/config.js').config,
    router = require('./helpers/router').router,
    app = express(),
    port = process.env.PORT || 8080;
// app.set('views','./views');
// app.set('view engine','ejs');
config(app);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./public'))
app.use('/api',router);
app.listen(port);
console.log(`app start on port ${port}`);
