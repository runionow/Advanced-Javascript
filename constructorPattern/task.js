'use strict';

var Task = function(data){
    this.name = data.name || "[no name]";
    this.completed = false;
};


Task.prototype.complete = function(){
    console.log('Completing task');
    this.completed = true;
};

Task.prototype.save = function(){
    console.log('Saving task '+ this.name);
};

var task1 = new Task({name : "Arun"});
var task2 = new Task({name : "Varun"});

task1.save();
task2.save();

