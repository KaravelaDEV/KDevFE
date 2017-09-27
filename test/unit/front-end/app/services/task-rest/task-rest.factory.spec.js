describe('Rest Factory', function() {
    var tRest;

    beforeEach(angular.mock.module('ComponentsModule'));

    beforeEach(inject(function(taskRest) {
        tRest = taskRest;
    }));

    it('Task Rest Exist', function() {
        expect(tRest).toBeDefined();
    });

    it('Save Task', function(done){
        var task = {id: 0, title: 'Create GCP', description: 'New GCP', date: new Date(), completed: false};

        tRest.save(task).then(function(json) {
            var task = json.data;
            expect(task.id).not.toBe(0);

            done();
        }).catch(function(ex) {
            console.log('parsing failed', ex);
            done();
        });
    });

    it('List Tasks ', function(done){
        var task = {id: 0, title:'Course A', description:'A', date: new Date(), completed: false};

        tRest.save(task).then(function(json1){
            task = {id: 0, title:'Course B', description:'B', date: new Date(), completed: false}

            tRest.save(task).then(function(json2){
                tRest.list().then(function(json3){
                    expect(json3.data.length).toEqual(2);
                    done();
                });
            });
        }).catch(function(ex) {
            console.log('parsing failed', ex);
            done();
        });
    });

    it('Remove Task', function(done){
        var task = {id:0, title:'Create Course A', description:'A', date: new Date(), completed: false};

        tRest.save(task).then(function(json) {
            tRest.remove(json.data).then(function(json){
                done();
            });
        }).catch(function(ex) {
            console.log('parsing failed', ex);
            done();
        });
    });

    it('Update Task', function(done){
        var task = {id:0, title:'Create Course A', description:'A', date: new Date(), completed: false};
        tRest.save(task).then(function(json1){
            json1.data.title = 'Create Course GCP';

            tRest.update(json1.data).then(function(json2){
                expect(json2.data.title).toEqual('Create Course GCP');
                done();
            });
        }).catch(function(ex) {
            console.log('parsing failed', ex);
            done();
        });
    });

    it('Update Task Status', function(done){
        var task = {id:0, title:'Create Course A', description:'A', date: new Date(), completed: false};

        tRest.save(task).then(function(json1){
            json1.data.completed = true;

            tRest.updateStatus(json1.data).then(function(json2){
                expect(json2.data.completed).toEqual(true);
                done();
            });
        }).catch(function(ex) {
            console.log('parsing failed', ex);
            done();
        });
    });


    /*
    it('Filter Tasks', function(){
        tRest.save({title:'Create Course GCP A', description:'A', date: new Date(), completed: false});
        tRest.save({title:'Create Course B', description:'GCP B', date: new Date(), completed: false});

        tRest.save({title:'Create Course GCP C', description:'C', date: new Date(), completed: true});
        tRest.save({title:'Create Course D', description:'GCP D', date: new Date(), completed: true});

        tRest.save({title:'Create Course GIS E', description:'E', date: new Date(), completed: false});
        tRest.save({title:'Create Course F', description:' GIS F', date: new Date(), completed: false});

        tRest.save({title:'Create Course GIS E', description:'E', date: new Date(), completed: true});
        tRest.save({title:'Create Course F', description:' GIS F', date: new Date(), completed: true});

        var filter = {query: '', completed: false};
        var tasksFiltered = tRest.filter(filter);
        expect(tasksFiltered.length).toEqual(4);

        filter = {query: '', completed: true};
        tasksFiltered = tRest.filter(filter);
        expect(tasksFiltered.length).toEqual(4);

        filter = {query: 'GCP', completed: null};
        tasksFiltered = tRest.filter(filter);
        expect(tasksFiltered.length).toEqual(4);

        filter = {query: 'GIS', completed: null};
        tasksFiltered = tRest.filter(filter);
        expect(tasksFiltered.length).toEqual(4);

        filter = {query: 'GCP', completed: true};
        tasksFiltered = tRest.filter(filter);
        expect(tasksFiltered.length).toEqual(2);

        filter = {query: 'GIS', completed: false};
        tasksFiltered = tRest.filter(filter);
        expect(tasksFiltered.length).toEqual(2);
    });
    */
});
