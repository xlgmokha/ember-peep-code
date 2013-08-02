var App = Ember.Application.create(); // boots ember.

// Router
App.Router.map(function(){
  this.resource('tables', function(){ // route to all tables
    this.resource('table', { path: ':table_id' }); // route to single table
  }); // /#/tables
});

// route goes through route object.
App.TablesRoute = Ember.Route.extend({
  model: function() { // define model to return to controller
    // this is where you fetch your model data like from a repository
    // then ember binds it to the controller.
    return App.Table.find();
  }
});

// Controllers
App.TablesController = Ember.ArrayController.extend();

// Models
App.Store = DS.Store.extend({
  revision: 11, // version of ember data we are using.
  adapter: 'DS.FixtureAdapter'
});

App.Table = DS.Model.extend();

App.Table.FIXTURES = [ {id :1}, {id :2}, {id :3}, {id :4}, {id :5}, {id :6}, ];
