
function config(app){
    var jsonFile = require('jsonfile'),
        fileConfig='./config/config.json',
        keys = [];
    jsonFile.readFile(fileConfig,function(err,confiOptions){
      if(err)
      {
        console.log(err);
      }
      keys = Object.keys(confiOptions);
      for(var  key in  keys){
        app.set(keys[key],confiOptions[keys[key]]);
      }

    });
}
module.exports.config = config;
