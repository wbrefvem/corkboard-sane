import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('address', {
  // Specify the other units that are required for this test.
  needs: ['model:contact', 'model:organization', 'model:special-event']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
