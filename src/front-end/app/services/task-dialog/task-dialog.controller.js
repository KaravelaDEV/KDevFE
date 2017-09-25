'use strict';

var dialogController = function($scope, $mdDialog, task) {
    $scope.task = task;

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.answer = function() {
        $mdDialog.hide($scope.task);
    };
};

module.exports = dialogController;
