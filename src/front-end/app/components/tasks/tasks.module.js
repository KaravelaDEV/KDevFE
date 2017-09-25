'use strict';

var tasksComponent = require('./tasks.component');
var taskPanelFactory = require('../../services/task-panel/task-panel.factory');
var taskDialogFactory = require('../../services/task-dialog/task-dialog.factory');

angular.module('tasksModule', []);
angular.module('tasksModule').component('tasks', tasksComponent);
angular.module('tasksModule').factory('taskPanel', taskPanelFactory);
angular.module('tasksModule').factory('taskDialog', taskDialogFactory);

module.exports = angular.module('tasksModule').name;
