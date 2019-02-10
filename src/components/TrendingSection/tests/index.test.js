import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';

import TrendingSection from '../index';

describe('<TrendingSection />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <TrendingSection
        trendings={[]}
        onAddRemoveFavorite={() => {}}
      />
    );

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
