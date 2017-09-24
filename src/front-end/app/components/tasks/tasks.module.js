'use strict';

var tasksComponent = require('./tasks.component');
var taskPanelFactory = require('../../services/task-panel/task-panel.factory');

angular.module('tasksModule', []);
angular.module('tasksModule').component('tasks', tasksComponent);
angular.module('tasksModule').factory('taskPanel', taskPanelFactory);

module.exports = angular.module('tasksModule').name;
