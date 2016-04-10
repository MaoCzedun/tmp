var jsonFile = require('jsonfile'),
    file='./models/users.json';
function User(id,email,location,phoneNumber){
  this.email = email;
  this.id = id;
  this.location = location;
  this.phoneNumber = phoneNumber;
}
// User.prototype.valida
User.prototype.find = function(id){
  for(var user in users)
  {
      if(users[user].id==id)
      {
        return users[user];
      }
  }
}
User.prototype.all = function(){
  // jsonFile.readFile('./tmp/lekvi_export.json',function(err,obj){
  jsonFile.readFile('./tmp/lekvi_export.json',function(err,obj){
  return   obj;
  });
}
User.prototype.save = function(){
  jsonFile.writeFile(file,this,function(err){
    if(err){console.log(`Error is ${err}`);}
    else {console.log(' successful saved ');}
  });
}
module.exports.User = User;
