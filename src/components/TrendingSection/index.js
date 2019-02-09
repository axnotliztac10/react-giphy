import React from 'react';

import GiphyCard from 'components/GiphyCard';
import { Text, Box, Flex } from 'rebass';

export default class TrendingSecton extends React.PureComponent {
  renderTrending = (trending, index) => {
    return (
      <GiphyCard
        giphy={trending}
        key= {index}
      />
    );
  }

  render() {
    const { trendings } = this.props;

    return (
      <Box my={4}>
        <Text fontSize={22}>Trendings</Text>
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
