'use strict';

var tasksController = ['$mdExpansionPanelGroup', 'taskPanel',
    function($mdExpansionPanelGroup, taskPanel){

    var self = this;

    var groupInstance;

    $mdExpansionPanelGroup().waitFor('expansionPanelGroup').then(function (instance) {
        groupInstance = instance;

        instance.register('templated', taskPanel);

        groupInstance.add('templated', {
            title: 'title test',
            summary: 'summary test',
            content: 'content test',
            exptitle: 'expanded title',
            expsummary: 'expanded summary'
        });

        groupInstance.add('templated', {
            title: 'title test',
            summary: 'summary test',
            content: 'content test',
            exptitle: 'expanded title',
            expsummary: 'expanded summary'
        });

        groupInstance.add('templated', {
            title: 'title test',
            summary: 'summary test',
            content: 'content test',
            exptitle: 'expanded title',
            expsummary: 'expanded summary'
        });
    });
}];

module.exports = tasksController;