var express = require('express'),
    app = express();
    bodyParser = require('body-parser');
    User = require('./models/User').User,
    jsonFile = require('jsonfile');
app.use(bodyParser.urlencoded({extended:true}));
var port = process.env.PORT || 8080,
    router = express.Router();

router.use(function(req,res,next){

  console.log('Something  is happening');
  next();
});
router.get('/',function(req,res){

  res.json({message:"hooray! welcome to our api!"});

});
router.route('/users')
      .post(function(req,res){

        var user = new User(21,req.body.name);
        user.save();
        res.json(user);
      })
      .get(function(req,res){

        res.json(new User(null,null).all());

      });
router.route('/users/:user_id')
      .get(function(req,res){
        res.json(new User(null,null).find(req.params.user_id));
      });
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
