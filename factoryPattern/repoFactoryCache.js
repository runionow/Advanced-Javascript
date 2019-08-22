var repoFactoryCache = function() {
    this.getRepo = function(repoType) {
        if(repoType === 'task') {
            if(this.taskRepo) {
                console.log('retrieve from cache');
                return this.taskRepo;
            } else {
                this.taskrepo = require('./repository');
            }
        }

        if(repoType === 'user') {
            var userRepo = require('./userRepository')();
            return userRepo;
        }

        if(repoType === 'project') {
            var projectRepo = require('./projectRepository')();
            return projectRepo;
        }
    }
}