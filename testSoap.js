
var url='http://turbosms.in.ua/api/wsdl.html',
    soap = require('soap'),
    soapCoockie = require('soap-cookie'),
    report = require('./errorReporting').report,
    clientPhoneAlex="+380934683919",
    clientPhoneVictoria="+380985885246",
    authData={login:"biglapa",password:"power1990"},
    sender="BigLapa.com",
    sseid;

soap.createClient(url,function(error,client){
     report(error);
     client.Auth(authData,function(error,result){
        report(error);
        console.log(result);
        client.setSecurity(new soapCoockie(client.lastResponseHeaders));
        client.SendSMS({sender:"BigLapa.com",destination:clientPhoneVictoria,text:"Пять минут полет нормальный.Прием, прием, как слыщно меня? Прием...."},function(error,result){
           report(error);
            console.log(result);
            console.log(client.lastRequestHeaders);
        });
      });

});
