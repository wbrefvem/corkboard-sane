import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  map: DS.attr('string'),
  url: DS.attr('string'),
  specialEvent: DS.belongsTo('special-event')  
});
