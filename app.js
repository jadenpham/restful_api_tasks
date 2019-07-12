var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

require('./backend/models/task.js'); //connecting to db under task.js
var routes = require('./backend/config/routes.js')//connect routes to server
routes(app);
app.listen(8000, function(req,res){
    console.log("listening");
})