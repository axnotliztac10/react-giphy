import React from 'react';

import GiphyCard from 'components/GiphyCard';
import { Text, Box, Flex } from 'rebass';

export default class TrendingSection extends React.PureComponent {
  renderTrending = (trending, index) => {
    const { onAddRemoveFavorite } = this.props;

    return (
      <GiphyCard
        giphy={trending}
        key= {index}
        onAddRemoveFavorite={onAddRemoveFavorite}
      />
    );
  }

  render() {
    const { trendings } = this.props;

    return (
      <Box my={4}>
        <Text textAlign="center" fontSize={25}>Trendings</Text>
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          {trendings.map(this.renderTrending)}
        </Flex>
      </Box>
    );
  }
}
