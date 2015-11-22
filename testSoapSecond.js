var soap = require('soap-ntlm');
var url='http://turbosms.in.ua/api/wsdl.html',
    report = require('./errorReporting').report,
    clientPhoneAlex="+380934683919",
    clientPhoneVictoria="+300985885246",
    authData={login:"biglapa",password:"power1990"},
    sender="BigLapa.com";
var httpntlm = require('httpntlm');

httpntlm.get({
    url: url,
    password: "power1990",
    username:"biglapa"
  },function(){
   soap.createClient(url,function(err,client){
    if(err)
    {
       console.log(err);
       return;
    }
    client.setSecurity(new soap.NtlmSecurity(authData.login, authData.password));
    client.Auth(authData,function(err, res){
      console.log(res);
    });
  });
});
