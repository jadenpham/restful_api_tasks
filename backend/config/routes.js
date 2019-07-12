var mongoose = require('mongoose');
    Tasks = mongoose.model('Tasks');

var tasks = require('../controllers/tasks.js'); //connecting this to controller, when request hits controller, it knows to bounce to these routes

module.exports = function(app){ //exporting these to controllers
    app.get('/', function(req, res){
        tasks.show(req, res);
    })
    app.get('/:id', function(req,res){
        tasks.show_one(req,res);

    })
    app.get('/new/:task/:description', function(req, res){
        tasks.create(req,res);
    })
    app.get('/update/:id/:task/:description', function(req, res){
        tasks.update(req,res);
    })
    app.get('/remove/:id', function(req,res){
        tasks.remove(req,res);
    })
}