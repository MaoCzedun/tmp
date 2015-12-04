function sendSms(phone,smsText){
  var url='http://turbosms.in.ua/api/wsdl.html',
      soap = require('soap'),
      soapCoockie = require('soap-cookie'),
      report = require('./errorReporting').report,
      authData={login:"biglapa",password:"power1990"},
      sender="BigLapa.com",
      sseid;

  soap.createClient(url,function(error,client){
       report(error);
       client.Auth(authData,function(error,result){
          report(error);
          client.setSecurity(new soapCoockie(client.lastResponseHeaders));
          client.SendSMS({sender:"BigLapa.com",destination:phone,text:smsText},function(error,result){
             report(error);
          });
        });

  });
}
exports.sendSms =sendSms;
