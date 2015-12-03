var users = [
  {
    id:1,
    name:"Petya"
  },
  {
    id:2,
    name:"Vasya"
  },
  {
    id:3,
    name:"Ivan"
  },
  {
    id:4,
    name:"Alex"
  },
  {
    id:5,

  }
];
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
  return users;
}
module.exports.User = User;
