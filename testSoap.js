
var url='http://turbosms.in.ua/api/wsdl.html',
    soap = require('soap'),
    soapCoockie = require('soap-cookie'),
    report = require('./errorReporting').report,
    clientPhoneAlex="+380934683919",
    clientPhoneVictoria="+300985885246",
    authData={login:"biglapa",password:"power1990"},
    sender="BigLapa.com",
    responseHeaders;

soap.createClient(url,function(error,client){
     report(error);
     client.Auth(authData,function(error,result){
        report(error);
        // console.log(result);

        // console.log(client.get);
        responseHeaders = client.lastResponseHeaders;
      });
});

soap.createClient(url,function(error,client){
     report(error);
     client.setSecurity(new soapCoockie(responseHeaders));
      console.log();
      console.log();
      console.log();
      client.SendSMS({sender:"BigLapa.com",destination:clientPhoneAlex,text:"Пять минут полет нормальный"},function(error,result){
         report(error);
          console.log(result);
          console.log(client.lastResponseHeaders);
      });
});
