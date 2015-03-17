/**
* SpecialEvent.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        location: {
            type: 'string',
            required: true
        },
        organizations: {
            collection: 'organization',
            via: 'specialEvents',
            required: true
        },
        dateSubmitted: {
            type: 'datetime',
            required: true
        },
        website: {
            type: 'string',
            required: true
        },
        purpose: {
            type: 'string',
            required: true
        },
        beneficiaries: {
            collection: 'beneficiary',
            via: 'specialEvents',
            required: true
        },
        date: {
            type: 'date',
            columnName: 'waterline_date',
            required: true
        },
        altDates: {
            type: 'array',
        },
        eventDayContact: {
            model: 'contact',
            required: true 
        },
        eventStartTime: {
            type: 'datetime',
            required: true
        },
        eventEndTime: {
            type: 'datetime',
            required: true
        },
        setUpStartTIme: {
            type: 'datetime',
            required: true
        },
        tearDownEndTime: {
            type: 'datetime',
            required: true
        },
        routeDescription: {
            type: 'text',
            required: true
        },
        routeMap: {
            type: 'string'
        },
        routeUrl: {
            type: 'string'
        },
        comments: {
            type: 'string'
        },
        eventTypes: {
            collection: 'eventType',
            via: 'specialEvents',
            required: true
        },
        participantTypes: {
            collection: 'participantType',
            via: 'specialEvents',
            required: true
        },
        annualEvent: {
            type: 'boolean'
        },
        estimatedAttendance: {
            type: 'integer',
            required: true
        },
        previousAttendance: {
            type: 'integer',
        },
        areas: {
            collection: 'area',
            via: 'specialEvents',
            required: true
        },
        trashRemovalPlan: {
            type: 'string',
            required: true
        },
        emergencyActionPlan: {
            type: 'string',
            required: true
        },
        alcohol: {
            type: 'boolean'
        },
        food: {
            type: 'boolean'
        },
        largeTentsOrInflatables: {
            type: 'boolena'
        },
        busImpact: {
            type:'boolean'
        },
        amplifiedMusic: {
            type: 'boolean'
        },
        openFlames: {
            type: 'boolean'
        },
        holdHarmlessAgree: {
            type: 'boolean',
            required: true
        },
        seNotifReqsAgree: {
            type: 'boolean',
            required: true
        },
        legalAgree: {
            type: 'boolean',
            required: true
        },
        appFeeAgree: {
            type: 'boolean',
            required: true
        }
    }
};

