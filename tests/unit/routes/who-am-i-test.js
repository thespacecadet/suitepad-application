import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | who-am-i', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:who-am-i');
    assert.ok(route);
  });
});
