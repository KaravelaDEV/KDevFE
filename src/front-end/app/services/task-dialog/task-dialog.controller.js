'use strict';

var dialogController = function($scope, $mdDialog, task) {
    var self = this;

    $scope.task = task;

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.answer = function(task) {
        $mdDialog.hide(task);
    };
};

module.exports = dialogController;
