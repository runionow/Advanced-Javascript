var TaskRepo = (function() {
    var taskRepo;
    var instanceId;

    function createRepo() {
        taskRepo = new Object("Task");
        instanceId = 1;
        return taskRepo;
    }

    function getInstanceId(id) {
        return instanceId;
    }
    

    return {
        getInstance: function() {
            if(!taskRepo) {
                taskRepo = createRepo();
                instanceId = "A1B34c1";
            }
            return taskRepo;
        },
        getInstanceId: getInstanceId
    };
})();

var repo1 = TaskRepo.getInstance();
console.log(TaskRepo.getInstanceId());

var repo2 = TaskRepo.getInstance();
console.log(TaskRepo.getInstanceId());
