import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    address: DS.belongsTo('address'),
    telephone: DS.attr('string'),
    cell: DS.attr('string'),
    organizations: DS.hasMany('organization'),
    specialEvents: DS.hasMany('special-event')  
});
