import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Card from '../index';

describe('<Card />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Card><div /></Card>);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
