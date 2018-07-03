import React from 'react';
import {expect} from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import App from '../../client/src/components/App.jsx';

spy(App.prototype, 'componentDidMount');

describe('<App />', () => {
  it('renders App', () => {
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});