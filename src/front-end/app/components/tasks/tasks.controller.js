'use strict';

var tasksController = ['$mdExpansionPanelGroup', '$mdDialog', 'taskPanel', 'taskDialog', 'taskRest',
    function($mdExpansionPanelGroup, $mdDialog, taskPanel, taskDialog, taskRest){

    var self = this;

    self.filter = {
        query: '',
        completed: null
    };

    self.groupInstance = null;

    $mdExpansionPanelGroup().waitFor('expansionPanelGroup').then(function (instance) {
        self.groupInstance = instance;

        instance.register('templated', taskPanel);

        var tasks = taskRest.list();
        tasks.forEach(function(task){
            self.groupInstance.add('templated', {task:task});
        });
    });

    self.addTask = function(ev){
        taskDialog.targetEvent = ev;
        taskDialog.locals = {task:{title:'', completed:false,  description:'', date:''}};
        $mdDialog.show(taskDialog).then(function(newTask){
            self.groupInstance.add('templated', {task:newTask});
            taskRest.save(newTask);
        }, function(){
        });
    };

    self.filterTasks = function(){
        taskRest.filter(self.filter);
    };
}];

module.exports = tasksController;
