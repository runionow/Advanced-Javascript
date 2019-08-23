var Task = function(data) {
    this.completedDate = data.completedDate | null;
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
    
};

var TaskService = function() {
    return {
        complete : function(task) {
            task.completed = true;
            console.log('Completing the task: '+ task.name);
        },
        setCompleteDate: function(task) {
            task.completedDate = new Date();
            console.log(task.name + ' completed on ' + task.completedDate);
        },
        notifyCompletion: function (task,user) {
            console.log('Notifying ' + user + 'of the completition of' + task.name);
        },
        save: function(task) {
            console.log('saving Task: '+ task.name);
        }
    };
}();


var TaskServiceWrapper = function() {

    function completeAndNotify(task) {
        TaskService.complete(myTask);
        if(myTask.completed == true) {
            TaskService.setCompleteDate(myTask);
            TaskService.notifyCompletion(myTask,'Arun Nekkalapudi');
            TaskService.save(myTask);
        }
    }

    return {
        completeAndNotify: completeAndNotify,
    };
}();

var myTask = new Task({
    name:'My Task',
    priority: 1,
    project: 'Courses',
    user: 'Jon',
    completed: false,
});

console.log(myTask);

// TaskService.complete(myTask);
// if(myTask.completed == true) {
//     TaskService.setCompleteDate(myTask);
//     TaskService.notifyCompletion(myTask,'Arun Nekkalapudi');
//     TaskService.save(myTask);
// }

TaskServiceWrapper.completeAndNotify(myTask);
console.log(myTask);