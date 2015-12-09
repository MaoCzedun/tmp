var express = require('express'),
    bodyParser = require('body-parser'),
    router = require('./helpers/router').router,
    app = express(),
    port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('./public'))
app.use('/api',router);

// app.get('/', function(req, res) {
//     res.send('Hello World');
// });
// app.post('/', function(req, res) {
//     res.send(req.body);
// });
// app.get('/user/:id[0-9]',function(req,res){
//     res.send(`User number ${req.params.id}`)
// });
app.listen(port);
console.log(`app start on port ${port}`);
