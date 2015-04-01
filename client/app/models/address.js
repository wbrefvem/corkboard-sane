import DS from 'ember-data';

export default DS.Model.extend({
    firstLine: DS.attr('string'),
    secondLine: DS.attr('string'),
    city: DS.attr('string'),
    state: DS.attr('string'),
    zipCode: DS.attr('string'),
    contact: DS.belongsTo('contact'),
    organization: DS.belongsTo('organization')  
});
