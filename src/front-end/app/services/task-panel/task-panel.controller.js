'use strict';

var taskPanelController = function($mdDialog, taskDialog, taskRest, task){
    var $ctrl = this;
    $ctrl.task = task;

    $ctrl.editTask = function(event){
        taskDialog.targetEvent = event;
        taskDialog.locals = {task: JSON.parse(JSON.stringify($ctrl.task))};
        $mdDialog.show(taskDialog).then(function(updatedTask){
            $ctrl.task = updatedTask;
            taskRest.update(updatedTask);
        }, function(){
            console.log('canceled');
        });
    };

    $ctrl.removeTask = function(panel){
        taskRest.remove($ctrl.task);
        panel.remove();
    };

    $ctrl.updateStatus = function(){
        taskRest.updateStatus($ctrl.task);
    };
};

module.exports = taskPanelController;