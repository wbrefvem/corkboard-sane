import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('beneficiary', {
  // Specify the other units that are required for this test.
  needs: [
    'model:special-event', 
    'model:address',
    'model:area',
    'model:beneficiary',
    'model:contact',
    'model:event-type',
    'model:organization',
    'model:participant-type',
    'model:route'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
