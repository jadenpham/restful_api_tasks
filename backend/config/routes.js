var mongoose = require('mongoose');
    Tasks = mongoose.model('Tasks');

var tasks = require('../controllers/tasks.js'); //connecting this to controller, when request hits controller, it knows to bounce to these routes

module.exports = function(app){ //exporting these to controllers
    app.get('/tasks', function(req, res){
        tasks.show(req, res);
    })
    app.get('/tasks/:id', function(req,res){
        tasks.show_one(req,res);

    })
    app.post('/new/:title/:description', function(req, res){
        tasks.create(req,res);
    })
    app.put('/update/:id', tasks.update)
    // })
    app.delete('/remove/:id', tasks.remove)
}