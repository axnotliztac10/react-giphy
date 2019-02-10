import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';

import { Search } from '../index';

describe('<Search />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Search
        handleSubmit={() => {}}
        onSearch={() => {}}
      />
    );

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
