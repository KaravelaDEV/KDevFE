'use strict';

var tasksController = ['$mdExpansionPanelGroup', '$mdDialog', 'taskPanel', 'taskDialog',
    function($mdExpansionPanelGroup, $mdDialog, taskPanel, taskDialog){

    var self = this;

    var groupInstance;

    $mdExpansionPanelGroup().waitFor('expansionPanelGroup').then(function (instance) {
        groupInstance = instance;

        instance.register('templated', taskPanel);

        groupInstance.add('templated', {task:{
            title: 'Launch GCP Course A',
            status: 'Pendente',
            description: 'Launching of the courser Introduction to Google Cloud Plaftorm Development A',
            date: '10/10/2017'
        }});

    });

    self.addTask = function(ev){
        taskDialog.targetEvent = ev;
        taskDialog.locals = {task:{title:'', status:'',  description:'', date:''}};
        $mdDialog.show(taskDialog).then(function(newTask){
            newTask.status = 'Pendente';
            groupInstance.add('templated', {task:newTask});
        }, function(){
            console.log('canceled')
        });
    };
}];

module.exports = tasksController;
