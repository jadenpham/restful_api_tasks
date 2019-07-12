var mongoose = require('mongoose');
require('../config/mongoose.js');

var TasksSchema = new mongoose.Schema({ //creating new schema
    title: {type: String},
    description: {type: String},
    completed: {type: Boolean, default: false},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});
mongoose.model('Tasks', TasksSchema); //setting schema in models as 'Tasks
var Task = mongoose.model('Tasks'); //retrieving schema from models named "Task"