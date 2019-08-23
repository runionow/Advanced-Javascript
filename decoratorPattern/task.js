var Task = function(name) {
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function() {
    console.log('Completing task: '+ this.name);
    this.completed = true;
};

Task.prototype.save = function() {
    console.log('saving task: ' + this.name);
};

var myTask  = new Task('Legacy Task');
myTask.complete();
myTask.save();

// 1. Naive approach
// var urgentTask = new Task('Urgent Task');
// urgentTask.priority = 2;
// urgentTask.notify = function(){
//     console.log('notifying important people');
// };

// // urgentTask.notify();
// urgentTask.complete();
// urgentTask.save = function(){
//     this.notify();
//     Task.prototype.save.call(this);
// };

// urgentTask.save();

// 2. Complicated and a good one 
var UrgentTask = function(name, priority) {
    Task.call(this,name);
    this.priority = priority;
} 

UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.notify = function() {
    console.log('notify important people');
};

UrgentTask.prototype.save = function(){
    this.notify();
    Task.prototype.save.call(this);
};

var ut = new UrgentTask('Urgent Task 101',2);
ut.complete();
console.log(ut);