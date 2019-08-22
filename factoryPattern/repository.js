// Eg: Module pattern

var repo = function(){
    function get(id){
        console.log('Getting task id' +id);
        return {
            name: 'new task from db'
        };
    }

    function save(task) {
        console.log('Saving task' + task.name);
    }

    return {
        get: get,
        save : save
    };
};

module.exports = repo();
