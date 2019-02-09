import React from 'react';

import Layout from 'components/Layout';
import Search from 'components/Search';
import TrendingSection from 'components/TrendingSection';

export default class Home extends React.PureComponent {
  render() {
    return (
      <Layout heading="React Challenge">
        <TrendingSection />
        <Search />
      </Layout>
    );
  }
}
