import React from 'react';

import Layout from 'components/Layout';
import Search from 'components/Search';
import TrendingSection from 'components/TrendingSection';

export default class Home extends React.PureComponent {
  render() {
    const { trendingList, onSearch } = this.props;

    return (
      <Layout heading="React Challenge">
        <TrendingSection trendings={trendingList} />
        <Search onSearch={onSearch} />
      </Layout>
    );
  }
}
