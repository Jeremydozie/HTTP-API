var express = require('express');
var app = express();
var port = process.env.port || 1337;

app.get("/product",function(request,response)
{
   response.json({"Message":"Welcome to Node js"});
});

 if(err) {
   res.status(500);
   return next(err);
 }

app.listen(port, function () {
   var datetime = new Date();
   var message = "Server runnning on Port:- " + port + "Started at :- " + datetime;
   console.log(message);
});
