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
      searchList,
      onAddRemoveFavorite
    } = this.props;

    return (
      <Layout heading="React Challenge">
        <TrendingSection trendings={trendingList} onAddRemoveFavorite={onAddRemoveFavorite} />
        <Search onSearch={onSearch} />
        <SearchResultsSection results={searchList} onAddRemoveFavorite={onAddRemoveFavorite} />
      </Layout>
    );
  }
}

export default withGiphy(Home);
