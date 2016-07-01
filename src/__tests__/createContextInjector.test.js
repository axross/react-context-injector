import test from 'ava';
import { render } from 'enzyme';
import React from 'react';
import createContextInjector from '../createContextInjector';

test('createContextInjector() returns ReactClass with Context for children', t => {
  const ContextInjector = createContextInjector({
    foo: 'bar',
    baz: 'qux',
  });

  const ChildComponent = (props, context) => {
    t.is(context.foo, 'bar');
    t.is(context.baz, 'qux');

    return null;
  };

  ChildComponent.contextTypes = {
    foo: React.PropTypes.any,
    baz: React.PropTypes.any,
  };

  const wrapper = render(
    <ContextInjector>
      <ChildComponent />
    </ContextInjector>
  );
});

test('createContextInjector() throws an Error when the first argument is not a Plain Object', t => {
  t.throws(() => createContextInjector('string'));
  t.throws(() => createContextInjector(123));
  t.throws(() => createContextInjector(true));
  t.throws(() => createContextInjector(['a', 'r', 'r', 'a', 'y']));
  t.throws(() => createContextInjector(new Date()));
  t.notThrows(() => createContextInjector({}));
});
