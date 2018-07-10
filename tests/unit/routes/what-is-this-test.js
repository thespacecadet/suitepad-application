import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | what-is-this', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:what-is-this');
    assert.ok(route);
  });
});
