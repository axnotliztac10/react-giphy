import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Layout from '../index';

describe('<Layout />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Layout heading="foobar">
        <div />
      </Layout>
    );

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
