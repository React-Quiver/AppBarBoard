jest.unmock('../AppBarBoard');

import React from 'react';
import { shallow } from 'enzyme';

describe('AppBarBoard', () => {
  it('should work', () => {
    const AppBarBoard = require('../AppBarBoard');
    const wrapper = shallow(
      <AppBarBoard />
    );
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').text()).toContain('Hay.');
  });

  it('should render all the card components', () => {
    const AppBarBoard = require('../AppBarBoard');
    const wrapper = shallow(
      <AppBarBoard text="It works!" />
    );

    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').text()).toContain('It works!');
  });
});
