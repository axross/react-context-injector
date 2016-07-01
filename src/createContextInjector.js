/* @flow */
import React from 'react';

const createContextInjector = (diContainer: Object): Function => {
  if (Object.prototype.toString.call(diContainer) !== '[object Object]') {
    throw TypeError('diContainer of createContextInjector(diContainer) must be a Plain Object.');
  }

  const childContextTypes = {};
  const childContext = {};

  for (const key of Object.keys(diContainer)) {
    childContextTypes[key] = React.PropTypes.any;
    childContext[key] = diContainer[key];
  }

  class ContextInjector extends React.Component {
    getChildContext() {
      return childContext;
    }

    constructor(props) {
      super(props);
    }

    render() {
      return this.props.children;
    }
  }

  ContextInjector.childContextTypes = childContextTypes;

  return ContextInjector;
};

export default createContextInjector;
