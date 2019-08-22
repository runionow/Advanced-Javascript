var Task = require('./task');
var Repo = require('./factoryPattern/repository');
var repoFactory = require('./factoryPattern/repoFactory');

var task1 = new Task(Repo.get(1));
var task2 = new Task(repoFactory.getRepo('task').get(2));

task2.save();

task1.complete();
task1.save();

task2.save();