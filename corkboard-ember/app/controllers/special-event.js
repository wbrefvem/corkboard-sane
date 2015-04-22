import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['organizations'],

  collapseId: function() {
    return '#' + this.model.id;
  }.property(),

  fireDepartmentRequirements: function() {
    var reqs = [];

    var eventTypes = this.model.get('eventTypes');
    console.log(this.model);
    return { 'paradeOrRace': (this.model.get('eventTypes') === 'Parade' || this.model.get('eventTypes') === 'Road Race') || null };

  }.property('special-event')
});
