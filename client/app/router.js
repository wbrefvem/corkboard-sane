import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('special-events', function() {});
  this.resource('addresses', function() {});
  this.resource('contacts', function() {});
  this.resource('organizations', function() {});
  this.resource('beneficiaries', function() {});
  this.resource('event-types', function() {});
  this.resource('participant-types', function() {});
  this.resource('alt-dates', function() {});
  this.resource('areas', function() {});
});

export default Router;
