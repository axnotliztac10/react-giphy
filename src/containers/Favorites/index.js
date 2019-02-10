import React from 'react';
import PropTypes from 'prop-types';

import withGiphy from 'containers/GiphyProvider/withGiphy';
import FavoritesSection from 'components/FavoritesSection';
import Layout from 'components/Layout';
import Search from 'components/Search';

export class Favorites extends React.PureComponent {
  static propTypes = {
    favorites: PropTypes.array,
    onAddRemoveFavorite: PropTypes.func,
    onSearchFavorites: PropTypes.func
  }

  render() {
    const {
      favorites,
      onAddRemoveFavorite,
      onSearchFavorites
    } = this.props;

    return (
      <Layout heading="Favorites">
        <Search onSearch={onSearchFavorites} />
        <FavoritesSection
          favorites={favorites}
          onAddRemoveFavorite={onAddRemoveFavorite}
        />
      </Layout>
    );
  }
}

export default withGiphy(Favorites);
