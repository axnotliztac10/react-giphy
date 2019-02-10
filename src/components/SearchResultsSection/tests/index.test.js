import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';

import SearchResultsSection from '../index';

describe('<SearchResultsSection />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <SearchResultsSection
        results={[{}]}
        onLoadMore={() => {}}
        onAddRemoveFavorite={() => {}}
      />
    );

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
