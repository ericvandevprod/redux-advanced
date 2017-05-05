import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import jsdom from 'jsdom';
import jQuery from 'jquery';
import chai, { expect } from 'chai';
import ChaiJQuery from 'chai-jquery';
import testUtils from 'react-addons-test-utils';

global.document = jsdom.jsdom('<!doctype html><html><head></head><body></body></html>');
global.window = global.document.defaultView;

const $ = jQuery(global.window);


const renderComponent = (ComponentClass, props, state) => {
  const componentInstance = testUtils.renderIntoDocument(
      <Provider store={createStore(reducers, state)}>
        <ComponentClass {...props} />
      </Provider>
  );
  return $(ReactDOM.findDOMNode(componentInstance));
};

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  testUtils.Simulate[eventName](this[0]);
};

ChaiJQuery(chai, chai.util, $);

export { renderComponent, expect };