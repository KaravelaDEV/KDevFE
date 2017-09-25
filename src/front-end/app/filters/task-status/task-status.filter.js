'use strict';

var taskStatus = function(completed) {
    if(completed){
        return 'Concluído';
    }

    return "Pendente";
};

var taskStatusFilter = [function() {
    return taskStatus;
}];

module.exports = taskStatusFilter;
