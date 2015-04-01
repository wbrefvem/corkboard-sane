import DS from 'ember-data';

export default DS.Model.extend({
    location: DS.attr('string'),
    organizations: DS.hasMany('organization'),
    dateSubmitted: DS.attr('date'),
    website: DS.attr('string'),
    purpose: DS.attr('string'),
    beneficiaries: DS.hasMany('beneficiary'),
    date: DS.attr('date'),
    altDates: DS.attr(),
    contact: DS.belongsTo('contact'),
    
    startTime: DS.attr(),
    endTime: DS.attr(),
    setUpTime: DS.attr(),
    tearDownTime: DS.attr(),
    route: DS.belongsTo('route'),
    comments: DS.attr('string'),
    
    eventTypes: DS.hasMany('event-type'),
    participantTypes: DS.hasMany('participant-type'),
    annualEvent: DS.attr('boolean'),
    estimatedAttendance: DS.attr('number'),
    previousAttendance: DS.attr('number'),
    areas: DS.hasMany('area'),
    trashRemovalPlan: DS.attr('string'),
    emergencyActionPlan: DS.attr('string'),
    
    alcohol: DS.attr('boolean'),
    food: DS.attr('boolean'),
    largeTentsOrInflatables: DS.attr('boolean'),
    busImpact: DS.attr('boolean'),
    amplifiedMusic: DS.attr('boolean'),
    openFlames: DS.attr('boolean'),

    holdHarmlessAgree: DS.attr('boolean'),
    seNotifReqsAgree: DS.attr('boolean'),
    legalAgree: DS.attr('boolean'),
    appFeeAgree: DS.attr('boolean')
});
