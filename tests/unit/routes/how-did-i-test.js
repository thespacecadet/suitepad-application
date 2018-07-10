import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | how-did-i', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:how-did-i');
    assert.ok(route);
  });
});
