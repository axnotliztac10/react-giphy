import React from 'react';

import GiphyCard from 'components/GiphyCard';
import { Text, Box, Flex } from 'rebass';

export default class FavoritesSection extends React.PureComponent {
  renderFavorite = (favorite, index) => {
    const { onAddRemoveFavorite } = this.props;

    if (!favorite.hideOnSearchFavorites === true) {
      return (
        <GiphyCard
          giphy={favorite}
          key= {index}
          onAddRemoveFavorite={onAddRemoveFavorite}
        />
      );
    }

    return null;
  }

  render() {
    const { favorites } = this.props;

    return (
      <Box my={4}>
        <Text textAlign="center" fontSize={25}>My favorites</Text>
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          {favorites.map(this.renderFavorite)}
        </Flex>
      </Box>
    );
  }
}
