'use strict';

var taskRest = function() {
    self = this;
    self.tasks = [{
            title: 'Launch GCP Course A',
            completed: true,
            description: 'Launching of the courser Introduction to Google Cloud Plaftorm Development A',
            date: new Date()
        },{
            title: 'Launch GCP Course A',
            completed: false,
            description: 'Launching of the courser Introduction to Google Cloud Plaftorm Development A',
            date: new Date()
        },{
            title: 'Launch GCP Course A',
            completed: true,
            description: 'Launching of the courser Introduction to Google Cloud Plaftorm Development A',
            date: new Date()
        },{
            title: 'Launch GCP Course A',
            completed: false,
            description: 'Launching of the courser Introduction to Google Cloud Plaftorm Development A',
            date: new Date()
        }
    ];

    self.save = function(task){
        self.tasks.push(task);
        console.log('Saving:');
        console.log(self.tasks);
    };

    self.list = function(){
        console.log('Listing:');
        return self.tasks;
    };

    self.remove = function(task){
        console.log('Removing:');
        console.log(task);
    };

    self.update = function(task){
        console.log('Updating:');
        console.log(task);
    };

    self.updateStatus = function(task){
        console.log('Updating status:');
        console.log(task);
    };

    self.filter = function(filter) {
        console.log('Filtering tasks:');
        console.log(filter);
    };
};

var taskRestFactory = [function() {
    return new taskRest();
}];

module.exports = taskRestFactory;
