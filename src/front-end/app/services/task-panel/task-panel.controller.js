'use strict';

var taskPanelController = function($mdDialog, taskDialog, task){
    var $ctrl = this;
    $ctrl.task = task;

    $ctrl.editTask = function(task, ev){
        taskDialog.targetEvent = ev;
        taskDialog.locals = {task: JSON.parse(JSON.stringify(task))};
        $mdDialog.show(taskDialog).then(function(updatedTask){
            console.log(updatedTask);
            $ctrl.task = updatedTask;
        }, function(){
            console.log('canceled');
        });
    }
};

module.exports = taskPanelController;