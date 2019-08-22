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

module.exports = Task;