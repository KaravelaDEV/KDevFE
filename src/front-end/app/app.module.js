'use strict';

require('./app.style.css');
var componentsModule = require('./components/components.module');

require('@uirouter/angularjs');
require('angular-simple-logger');
var moment = require('moment');

angular.module('app', [componentsModule, 'ui.router', 'nemLogging']);

angular.module('app').config(['$logProvider', function($logProvider){
    $logProvider.debugEnabled(true);
}]);

angular.module('app').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdDateLocaleProvider', function($stateProvider,  $urlRouterProvider, $locationProvider, $mdDateLocaleProvider) {
    var tasksState = {
        name: 'tasksState',
        url: '/',
        component: 'tasks'
    };

    $urlRouterProvider.otherwise('/');
    $stateProvider.state(tasksState);

    $mdDateLocaleProvider.formatDate = function(date) {
        return moment(date).format('DD/MM/YYYY');
    };

    $mdDateLocaleProvider.parseDate = function(dateString) {
        var m = moment(dateString, 'DD/MM/YYYY', true);
        return m.isValid() ? m.toDate() : new Date(NaN);
    };

    $locationProvider.html5Mode(false);
}]);


module.exports = angular.module('app').name;
