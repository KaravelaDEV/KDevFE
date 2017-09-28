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
        var options = {
            method: 'GET'
        };

        var filterString = "?query=" + filter.query + "&status=" + filter.status;

        var promise = fetch('http://localhost:3000/tasks' + filterString, options).then(function(response){
            return response.json();
        });

        return promise;
    };

};

var taskRestFactory = [function() {
    return new taskRest();
}];

module.exports = taskRestFactory;
