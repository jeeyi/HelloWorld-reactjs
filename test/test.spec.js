import Component from '../src/Component.jsx';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import {IntlProvider} from 'react-intl';

var component;
var spy = sinon.spy();

function renderWithIntl(element) {
  let instance;

  TestUtils.renderIntoDocument(
    <IntlProvider>
      {React.cloneElement(element, {ref: (c) => (instance = c.refs.wrappedInstance)})}
    </IntlProvider>
  );

  return instance;
}

describe('Given an instance of the Component', () => {
  describe('when we render the component', () => {
    before(() => {
      component = renderWithIntl(<Component onRender={ spy } />);
    });
    it('should render a paragraph', () => {
      var paragraph = TestUtils.scryRenderedDOMComponentsWithTag(component, 'p');

      expect(paragraph).to.have.length.above(0, 'Expected to have element with tag <p>');
      expect(spy).to.be.calledOnce;
    });
  });
});
