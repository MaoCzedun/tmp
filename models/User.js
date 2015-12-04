var jsonFile = require('jsonfile'),
    file='./models/users.json';
function User(id,name){
  this.id = id;
  this.name = name;
}
User.prototype.find = function(id){
  for(var user in users)
  {
      if(users[user].id==id)
      {
        return users[user];
      }
  }
  // console.log(Object.keys(bears));
}
User.prototype.all = function(){
  var users;
  jsonFile.readFile(file,function(err,obj){
    users = obj;
  });
  return users;
}
User.prototype.save = function(){
  jsonFile.writeFile(file,this,function(err){
    if(err){console.log(`Error is ${err}`);}
    else {console.log(' successful saved ');}
  });
}
module.exports.User = User;
