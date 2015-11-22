var http = require("http"),
    url = require("url");
function start(route,handle){
    function onRequest(request,response){
      var pathname = url.parse(request.url).pathname;
      console.log(`Request vsadg for ${ request.url }+ received`);
      route(handle,pathname,response,request);
    }
    http.createServer(onRequest).listen(3000);
    console.log("Server start on 3000 port");
};
exports.start = start;
