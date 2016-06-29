# react-context-injector

Plain Dependency Injector as Context for React inspired by [this post](http://jaysoo.ca/2015/06/09/react-contexts-and-dependency-injection/)

## Installation

```
$ npm install --save react-context-injector
```

```javascript
import createContextInjector from 'react-context-injector';

const ContextInjector = createContextInjector({ ... });
```

## Example

```javascript
import createContextInjector from 'react-context-injector';
import React from 'react';
import ReactDOM from 'react-dom';
import SomeComponent from './SomeComponent';

const ContextInjector = createContextInjector({
  fooService: {
    doSomething: () => 'World!',
  },
});

ReactDOM.render(
  <ContextInjector>
    <SomeComponent>
      Hello,
    </SomeComponent>
  </ContextInjector>
);
```

##### SomeComponent.js

```javascript
const SomeComponent = (props, context) => {
  const someResult = context.fooService.doSomething();

  return (
    <div>
      {props.children} {someResult}
    </div>
  );
};

SomeComponent.contextTypes = {
  barService: React.PropTypes.any,
};
```

## Usage

### createContextInjector(diContainer: object): ReactClass

Create `<ContextInjector>` with `diContainer`. Child elements of `<ContextInjector>` can access to some member of `diContainer` as context. It works like as the [Dependency injection](https://en.wikipedia.org/wiki/Dependency_injection).

See [example](#example).

## License

MIT
