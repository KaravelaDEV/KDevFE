'use strict';

var taskPanelController = function(title, summary, content, exptitle, expsummary){
    var $ctrl = this;
    $ctrl.title = title;
    $ctrl.summary = summary;
    $ctrl.content = content;
    $ctrl.exptitle = exptitle;
    $ctrl.expsummary = expsummary
};

module.exports = taskPanelController;