import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Button } from 'rebass';

import GiphyCard from '../index';

describe('<Card />', () => {
  const giphy = {
    title: '',
    images: {
      downsizedMedium: { url: '' }
    }
  };
  const wrapper = shallow(
    <GiphyCard
      giphy={giphy}
      onAddRemoveFavorite={() => {}}
    />
  );

  it('should render correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('Should trigger action', () => {
    wrapper.find(Button).simulate('click');
  });
});
