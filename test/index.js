import { test } from 'tape';

import canDivideIn from '../build/index.js';

test('A passing test', (assert) => {
  assert.pass('This test will pass.');
  assert.end();
});

test('Assertions with tape.', (assert) => {
  assert.same(canDivideIn(3), [1, 3],
    'Recibe different value');

  assert.same(canDivideIn(4), [1, 2, 4],
    'Recibe different value');

  assert.same(canDivideIn(36), [1, 2, 3, 4, 6, 9, 12, 18, 36],
    'Recibe different value');

  assert.end();
});
