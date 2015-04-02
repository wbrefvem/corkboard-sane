import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('special-event', params['special-event_id']);
  }
});
