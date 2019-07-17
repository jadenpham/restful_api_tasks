var mongoose = require('mongoose');
    var Tasks = mongoose.model('Tasks');

module.exports = {
    show: function(req,res){
        Tasks.find({}, function(err, tasks){
            if(err){
                res.json(err);
            } else{
                res.json(tasks); //if successful render tasks as json
            }
        });
    },

    show_one: function(req,res){
        Tasks.findOne({_id: req.params.id}, function(err,task){
            if(err){
                res.json(err);
            } else{
                res.json(task);
            }
        });
    },
    create: function(req,res){
        Tasks.create({title: req.params.title, description: req.params.description}, function(err, task){ //params to pull data from url, req.body pulls from form
            if(err){
                res.json(err);
            } else{
                res.json(task);
            }
        });
    },
    update: function(req, res){
        console.log(req.body, "This is from the backside")
        Tasks.findByIdAndUpdate({_id: req.params.id}, req.body, function(err, task){
           if(err){
               res.json(err);
           }else{
               res.json(task);
           }
        })},
    remove: function(req,res){
        Tasks.deleteOne({_id: req.params.id}, function(err, task){ //params is what is passed thru url
            if(err){
                console.log("shit hits the fan")
                res.json(err);
            } else{
                res.json(task)
            }
        })
    }
}