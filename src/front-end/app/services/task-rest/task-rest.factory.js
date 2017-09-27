'use strict';

require('fetch-polyfill');

var taskRest = function() {
    self = this;

    self.save = function(task){
        var options = {
            method: 'POST',
            body: JSON.stringify(task)
        };

        var promise = fetch('http://localhost:3000/tasks', options).then(function(response){
            return response.json();
        });

        return promise;
    };

    self.list = function(){
        var options = {
            method: 'GET'
        };

        var promise = fetch('http://localhost:3000/tasks', options).then(function(response){
            return response.json();
        });

        return promise;
    };

    self.remove = function(task){
        var options = {
            method: 'DELETE',
            body: JSON.stringify(task)
        };

        var promise = fetch('http://localhost:3000/tasks' , options).then(function(response){
            return response.json();
        });

        return promise;
    };

    self.update = function(task){
        var options = {
            method: 'PUT',
            body: JSON.stringify(task)
        };

        var promise = fetch('http://localhost:3000/tasks' , options).then(function(response){
            return response.json();
        });

        return promise;
    };

    self.updateStatus = function(task){
        return self.update(task);
    };

    self.filter = function(filter) {
        self.tasks = [];

        var tasksFiltered = [];

        self.tasks.forEach(function(task){
            if(filter.query.length === 0){
                if(task.completed === filter.completed){
                    tasksFiltered.push(task);
                }
            }
        });

        self.tasks.forEach(function(task){
            if(filter.completed === null){
                if((task.title.indexOf(filter.query) !== -1) || (task.description.indexOf(filter.query) !== -1)){
                    tasksFiltered.push(task);
                }
            }
        });

        self.tasks.forEach(function(task){
            if((filter.query.length !== 0) && filter.completed !== null){
                if((task.completed === filter.completed) &&
                   ((task.title.indexOf(filter.query) !== -1) ||
                    (task.description.indexOf(filter.query) !== -1))){
                    tasksFiltered.push(task);
                }
            }
        });

        return tasksFiltered;
    };

};

var taskRestFactory = [function() {
    return new taskRest();
}];

module.exports = taskRestFactory;
