import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';

import SearchResultsSection from 'components/SearchResultsSection';

import { Home } from '../index';

describe('<Home />', () => {
  const wrapper = shallow(
    <Home
      onSearch={() => {}}
      trendingList={[]}
      searchList={[]}
      onAddRemoveFavorite={() => {}}
      searchPagination={{}}
    />
  );

  it('should render correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('Should trigger prop', () => {
    wrapper.find(SearchResultsSection).prop('onLoadMore')();
  });
});
