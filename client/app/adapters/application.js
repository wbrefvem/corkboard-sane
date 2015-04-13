import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  coalesceFindRequests: true,
  namespace: 'api/v1',
  host: 'http://localhost:1337',

  pathForType: function(type) {
    var dasherized = Ember.String.dasherize(type);
    return Ember.String.pluralize(dasherized);
  }
  //this is dependent on production/development environment
  //It is configured in config/environment.js
  //host: ClientENV.hostUrl
  //add IP from $DOCKER_HOST if --docker flag is set
  //host: 'http://192.168.59.103:1337'
});