import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource('special-events', function() {
    
    this.route('new', function() {
      
      this.route('contact-info');
      this.route('event-details');
      this.route('zones-and-usage');
      this.route('disclaimers-and-review');
    });


    this.route('list');
  });
  
  this.resource('special-event', { path: '/special-events/:special-event_id' }, function() {
    
    this.route('edit');
    this.route('delete');
  });

  this.resource('organizations', function() {
    this.route('new');
  });

  this.resource('organization', { path: '/organizations/:organization_id' }, function() {
    this.route('edit');
    this.route('delete');
  });

  this.route('welcome');
});

export default Router;
