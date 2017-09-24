'use strict';

require('angular_material_css');
require('md_expansion_panel_css');

require('angular-animate');
require('angular-aria');
require('angular-messages');
require('angular-material');
require('angular-material-expansion-panel');

var tasksModule = require('./tasks/tasks.module');

angular.module('ComponentsModule', [
    tasksModule,
    'ngAnimate',
    'ngMaterial',
    'material.components.expansionPanels'
]);

module.exports = angular.module('ComponentsModule').name;
