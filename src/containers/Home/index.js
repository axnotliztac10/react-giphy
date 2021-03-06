import React from 'react';
import PropTypes from 'prop-types';

import withGiphy from 'containers/GiphyProvider/withGiphy';
import Layout from 'components/Layout';
import Search from 'components/Search';
import TrendingSection from 'components/TrendingSection';
import SearchResultsSection from 'components/SearchResultsSection';

export class Home extends React.PureComponent {
  static propTypes = {
    onSearch: PropTypes.func,
    trendingList: PropTypes.array,
    searchList: PropTypes.array,
    onAddRemoveFavorite: PropTypes.func,
    searchPagination: PropTypes.object
  }

  render() {
    const {
      onSearch,
      trendingList,
      searchList,
      onAddRemoveFavorite,
      searchPagination
    } = this.props;

    return (
      <Layout heading="React Challenge">
        <TrendingSection trendings={trendingList} onAddRemoveFavorite={onAddRemoveFavorite} />
        <Search onSearch={onSearch} />
        <SearchResultsSection
          results={searchList}
          onAddRemoveFavorite={onAddRemoveFavorite}
          onLoadMore={() => onSearch({
            search: searchPagination.currentSearch
          })}
        />
      </Layout>
    );
  }
}

export default withGiphy(Home);
