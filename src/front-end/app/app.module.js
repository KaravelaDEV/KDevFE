'use strict';

require('./app.style.css');
var componentsModule = require('./components/components.module');

require('@uirouter/angularjs');
require('angular-simple-logger');

angular.module('app', [componentsModule, 'ui.router', 'nemLogging']);

angular.module('app').config(['$logProvider', function($logProvider){
    $logProvider.debugEnabled(true);
}]);

angular.module('app').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider,  $urlRouterProvider, $locationProvider) {
    var tasksState = {
        name: 'tasksState',
        url: '/',
        component: 'tasks'
    };

    $urlRouterProvider.otherwise('/');
    $stateProvider.state(tasksState);

    $locationProvider.html5Mode(false);
}]);

module.exports = angular.module('app').name;
