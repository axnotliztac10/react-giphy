import React from 'react';

import withGiphy from 'containers/GiphyProvider/withGiphy';
import Layout from 'components/Layout';
import Search from 'components/Search';
import TrendingSection from 'components/TrendingSection';
import SearchResultsSection from 'components/SearchResultsSection';

export class Home extends React.PureComponent {
  render() {
    const {
      onSearch,
      trendingList,
      searchList
    } = this.props;

    return (
      <Layout heading="React Challenge">
        <TrendingSection trendings={trendingList} />
        <Search onSearch={onSearch} />
        <SearchResultsSection results={searchList} />
      </Layout>
    );
  }
}

export default withGiphy(Home);
