import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';

import FavoritesSection from '../index';

describe('<FavoritesSection />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <FavoritesSection
        favorites={[{ hideOnSearchFavorites: true }, { hideOnSearchFavorites: false }]}
        onAddRemoveFavorite={() => {}}
      />
    );

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
