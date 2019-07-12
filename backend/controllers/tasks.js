var mongoose = require('mongoose');
    Tasks = mongoose.model('Tasks');

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
        Tasks.create({title: req.params.task, description: req.params.description}, function(err, task){
            if(err){
                res.json(err);
            } else{
                res.redirect('/');
            }
        });
    },
    update: function(req, res){
        Tasks.updateOne({_id: req.params.id}, {$set: {title: req.params.task, description: req.params.description}}, function(err, task){
           if(err){
               res.json(err);
           }else{
               res.json(task);
           }
        })},
    remove: function(req,res){
        Tasks.deleteOne({id: req.params.task}, function(err, task){
            if(err){
                res.json(err);
            } else{
                res.redirect('/')
            }
        })
    }
}