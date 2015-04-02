import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.belongsTo('address'),
  type: DS.attr('string'),
  contact: DS.belongsTo('contact'),
  specialEvents: DS.hasMany('special-event')
});
