var jsonFile = require('jsonfile'),
    user = require('./models/User'),
    userObject = new user.User(10,"Lox");
// bear.find(2);
console.log();
jsonFile.writeFile('./models/users.json',userObject,function(err){
  console.log(err);
});
