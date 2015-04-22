import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['organizations'],

  itemController: 'special-event'

});