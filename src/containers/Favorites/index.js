import React from 'react';

import withGiphy from 'containers/GiphyProvider/withGiphy';
import FavoritesSection from 'components/FavoritesSection';
import Layout from 'components/Layout';
import Search from 'components/Search';

export class Favorites extends React.PureComponent {
  render() {
    const { onSearch, favorites, onAddRemoveFavorite } = this.props;

    return (
      <Layout heading="Favorites">
        <Search onSearch={onSearch} />
        <FavoritesSection favorites={favorites} onAddRemoveFavorite={onAddRemoveFavorite} />
      </Layout>
    );
  }
}

export default withGiphy(Favorites);
